/**
 * CropGuard AI — Diagnosis Routes
 */
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { analyzeCropImage } = require('../services/gemini.service');
const { getRecommendations, getCropTips, getSupportedCrops } = require('../services/recommendation.service');
const { getDiseaseById, searchDiseases, getAllDiseases } = require('../data/diseaseDatabase');

// Configure multer for image uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    cb(null, allowed.includes(file.mimetype));
  }
});

// Store diagnoses in memory (replace with DB in production)
const diagnosisHistory = [];

/**
 * POST /api/diagnosis/analyze
 * Upload an image and get crop disease diagnosis
 */
router.post('/analyze', upload.single('image'), async (req, res) => {
  try {
    const { cropType, lang = 'en' } = req.body;

    if (!cropType) {
      return res.status(400).json({ error: 'cropType is required' });
    }

    // Use uploaded image or mock
    const imageBuffer = req.file?.buffer || null;
    const mimeType = req.file?.mimetype || 'image/jpeg';

    // Run AI analysis
    const analysis = await analyzeCropImage(imageBuffer, cropType, mimeType);

    let recommendations = null;
    if (analysis.detected && analysis.diseaseId) {
      recommendations = getRecommendations(analysis.diseaseId, lang);
    }

    const diagnosis = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      cropType,
      analysis,
      recommendations,
      lang
    };

    // Store in history
    diagnosisHistory.unshift(diagnosis);
    if (diagnosisHistory.length > 100) diagnosisHistory.pop();

    res.json(diagnosis);
  } catch (error) {
    console.error('Diagnosis error:', error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
});

/**
 * GET /api/diagnosis/history
 * Get recent diagnoses
 */
router.get('/history', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  res.json(diagnosisHistory.slice(0, limit));
});

/**
 * GET /api/diagnosis/crops
 * Get supported crops
 */
router.get('/crops', (req, res) => {
  res.json(getSupportedCrops());
});

/**
 * GET /api/diagnosis/diseases
 * Get all diseases or filter by crop
 */
router.get('/diseases', (req, res) => {
  const { crop, search, lang = 'en' } = req.query;

  let results;
  if (search) {
    results = searchDiseases(search);
  } else if (crop) {
    const { getDiseasesByCrop } = require('../data/diseaseDatabase');
    results = getDiseasesByCrop(crop);
  } else {
    results = getAllDiseases();
  }

  // Localize response
  const localized = results.map(d => ({
    id: d.id,
    crop: d.crop,
    name: d.name[lang] || d.name.en,
    severity: d.severity,
    symptoms: d.symptoms[lang] || d.symptoms.en,
    affectedParts: d.affectedParts
  }));

  res.json(localized);
});

/**
 * GET /api/diagnosis/disease/:id
 * Get full disease details with recommendations
 */
router.get('/disease/:id', (req, res) => {
  const { lang = 'en' } = req.query;
  const recommendations = getRecommendations(req.params.id, lang);

  if (!recommendations) {
    return res.status(404).json({ error: 'Disease not found' });
  }

  res.json(recommendations);
});

/**
 * GET /api/diagnosis/tips/:crop
 * Get quick tips for a crop
 */
router.get('/tips/:crop', (req, res) => {
  const { lang = 'en' } = req.query;
  const tips = getCropTips(req.params.crop, lang);
  res.json(tips);
});

module.exports = router;
