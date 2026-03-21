/**
 * CropGuard AI — Alert Routes
 */
const express = require('express');
const router = express.Router();
const { getWeather, generateAlerts } = require('../services/weather.service');

/**
 * GET /api/alerts/weather/:state
 */
router.get('/weather/:state', async (req, res) => {
  try {
    const weather = await getWeather(req.params.state);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

/**
 * GET /api/alerts/:state
 */
router.get('/:state', async (req, res) => {
  try {
    const { lang = 'en' } = req.query;
    const weather = await getWeather(req.params.state);
    const alerts = generateAlerts(weather, lang);
    res.json({ weather, alerts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate alerts' });
  }
});

module.exports = router;
