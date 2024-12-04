// models/userModel.js
const bcrypt = require('bcryptjs');
let users = [
    { id: 1, username: 'admin', password: '$2b$10$E5R9OG6lfEkD2VxZih8n2OXeOVIz9F9ORHKLFkMvTCkdqvThD0SHi', role: 'admin' } // password: 'admin123'
  ];
  
  function getUserByUsername(username) {
    return users.find(user => user.username === username);
  }
  
  function addUser(username, password, role) {
    const newUser = { id: users.length + 1, username, password, role };
    users.push(newUser);
  }
  function getAllUsers() {
    return users;
}

function deleteUserByUsername(username) {
  const userIndex = users.findIndex(user => user.username === username);
  if (userIndex !== -1) {
      users.splice(userIndex, 1); // Remove the user from the array
      return true; // Return true if user was deleted
  }
  return false; // Return false if user was not found
}


function updateUserByUsername(username, updatedDetails) {
  const user = users.find(user => user.username === username);
  if (user) {
      if (updatedDetails.username) user.username = updatedDetails.username;
      if (updatedDetails.password) {
          // Hash the new password before saving
          user.password = bcrypt.hashSync(updatedDetails.password, 10);
      }
      return true;
  }
  return false;
}

  module.exports = { getAllUsers,deleteUserByUsername,getUserByUsername,updateUserByUsername, addUser };
  