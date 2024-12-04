// routes/adminRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const router = express.Router();

// Middleware to authenticate JWT token
function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(403).json({ message: 'Access denied' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Middleware to check for admin role
function authorizeAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
}

// Protected route for admins only
router.get('/admin-dashboard', authenticateJWT, authorizeAdmin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
