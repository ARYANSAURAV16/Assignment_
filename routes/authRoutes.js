// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUserByUsername, addUser } = require('../models/userModel');
const { jwtSecret } = require('../config');
const router = express.Router();

// User Registration Route
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  // Check if username already exists
  if (getUserByUsername(username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add user to "database"
  addUser(username, hashedPassword, role || 'user');

  res.status(201).json({ message: 'User registered successfully' });
});

// User Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = getUserByUsername(username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Compare password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, jwtSecret, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
