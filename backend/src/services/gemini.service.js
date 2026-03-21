/**
 * CropGuard AI — Mock Diagnosis Service
 * Simulates AI-powered crop disease detection
 * Replace with real Gemini Vision API when API key is available
 */

const { getDiseasesByCrop, diseases } = require('../data/diseaseDatabase');

/**
 * Analyze a crop image and return diagnosis
 * In production, this sends the image to Google Gemini Vision API
 * For MVP, returns intelligent mock results based on crop type
 */
async function analyzeCropImage(imageBuffer, cropType, mimeType) {
  const useMock = process.env.USE_MOCK_SERVICES === 'true';

  if (!useMock && process.env.GEMINI_API_KEY) {
    return await analyzeWithGemini(imageBuffer, cropType, mimeType);
  }

  return await mockAnalysis(cropType);
}

/**
 * Real Gemini Vision API integration
 */
async function analyzeWithGemini(imageBuffer, cropType, mimeType) {
  try {
    const base64Image = imageBuffer.toString('base64');

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                text: `You are an expert agricultural pathologist specializing in Nigerian crops.
Analyze this image of a ${cropType} plant and identify any diseases, pest damage, or nutrient deficiencies.

Respond ONLY with valid JSON in this exact format:
{
  "detected": true/false,
  "diseaseName": "name of disease",
  "confidence": 0.0-1.0,
  "severity": "low/medium/high/critical",
  "affectedParts": ["list of affected plant parts"],
  "description": "brief description of what you observe",
  "possibleDiseaseIds": ["matching IDs from our database if applicable"]
}

Known disease IDs for ${cropType}: ${getDiseasesByCrop(cropType).map(d => d.id).join(', ')}

If the image doesn't show a plant or is unclear, set detected to false.`
              },
              {
                inline_data: {
                  mime_type: mimeType || 'image/jpeg',
                  data: base64Image
                }
              }
            ]
          }]
        })
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    return { detected: false, error: 'Could not parse AI response' };
  } catch (error) {
    console.error('Gemini API error:', error.message);
    // Fallback to mock
    return await mockAnalysis(cropType);
  }
}

/**
 * Mock analysis for demo — returns realistic results
 */
async function mockAnalysis(cropType) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

  const cropDiseases = getDiseasesByCrop(cropType);

  if (cropDiseases.length === 0) {
    return {
      detected: false,
      confidence: 0,
      message: 'No diseases found in our database for this crop type.'
    };
  }

  // Pick a random disease for the crop
  const disease = cropDiseases[Math.floor(Math.random() * cropDiseases.length)];
  const confidence = 0.72 + Math.random() * 0.23; // 72-95% confidence

  return {
    detected: true,
    diseaseId: disease.id,
    diseaseName: disease.name.en,
    confidence: Math.round(confidence * 100) / 100,
    severity: disease.severity,
    affectedParts: disease.affectedParts,
    description: `Analysis detected signs consistent with ${disease.name.en}. ${disease.symptoms.en}`,
    isMock: true
  };
}

module.exports = { analyzeCropImage };
