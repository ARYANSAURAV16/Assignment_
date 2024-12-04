// index.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/admin', adminRoutes);  // Admin routes
app.use('/api', userRoutes); // Use user routes

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
