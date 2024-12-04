const express = require('express');
const router = express.Router();
const { getAllUsers ,deleteUserByUsername,updateUserByUsername} = require('../models/userModel'); 

// GET route to fetch all users
router.get('/users', (req, res) => {
    const users = getAllUsers(); // Get all users from the model
    res.json(users);
});


// DELETE route to delete a user by ID
router.delete('/users/:username', (req, res) => {
    const username = req.params.username; // Get username from URL
    const wasDeleted = deleteUserByUsername(username); // Call model function

    if (wasDeleted) {
        res.json({ message: `User with username "${username}" deleted successfully` });
    } else {
        res.status(404).json({ message: `User with username "${username}" not found` });
    }
});

router.put('/users/:username', (req, res) => {
    const username = req.params.username;
    const updatedDetails = req.body; // Get updated details from request body

    const wasUpdated = updateUserByUsername(username, updatedDetails);
    if (wasUpdated) {
        res.json({ message: `User with username "${username}" updated successfully` });
    } else {
        res.status(404).json({ message: `User with username "${username}" not found` });
    }
});



module.exports = router;
