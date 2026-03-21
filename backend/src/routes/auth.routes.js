/**
 * CropGuard AI — Auth Routes (SMS OTP based)
 */
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory user store (replace with DB in production)
const users = [];
const otpStore = {};

/**
 * POST /api/auth/request-otp
 */
router.post('/request-otp', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone number is required' });

  // Generate mock OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  otpStore[phone] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

  console.log(`📱 OTP for ${phone}: ${otp} (mock — in production, sent via SMS)`);

  res.json({
    success: true,
    message: 'OTP sent successfully',
    // Include OTP in response for demo purposes only
    ...(process.env.USE_MOCK_SERVICES === 'true' && { demoOtp: otp })
  });
});

/**
 * POST /api/auth/verify-otp
 */
router.post('/verify-otp', (req, res) => {
  const { phone, otp, name } = req.body;

  const stored = otpStore[phone];
  if (!stored) return res.status(400).json({ error: 'No OTP found. Request a new one.' });
  if (Date.now() > stored.expiresAt) return res.status(400).json({ error: 'OTP expired' });
  if (stored.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });

  // Clear OTP
  delete otpStore[phone];

  // Find or create user
  let user = users.find(u => u.phone === phone);
  if (!user) {
    user = {
      id: uuidv4(),
      phone,
      name: name || 'Farmer',
      state: 'Lagos',
      joinedAt: new Date().toISOString()
    };
    users.push(user);
  }

  res.json({
    success: true,
    user,
    token: `mock-jwt-${user.id}` // In production, generate real JWT
  });
});

/**
 * GET /api/auth/profile
 */
router.get('/profile', (req, res) => {
  // Mock auth — in production, verify JWT
  const userId = req.headers['x-user-id'];
  const user = users.find(u => u.id === userId) || {
    id: 'demo',
    phone: '+234801234567',
    name: 'Demo Farmer',
    state: 'Lagos',
    joinedAt: new Date().toISOString()
  };
  res.json(user);
});

module.exports = router;
