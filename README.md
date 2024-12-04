RBAC Authentication and User Management System
This project is a basic implementation of a Role-Based Access Control (RBAC) system with features like user registration, login, listing users, updating user details, and deleting users. It ensures secure authentication and authorization practices using JWT (JSON Web Tokens) and bcrypt for password encryption.

Features
1. User Registration
Users can register by providing a username, password, and role.
Passwords are hashed using bcrypt before being stored for security.
Endpoint:
POST /api/auth/register
Request Example:
json
Copy code
{
    "username": "newUser",
    "password": "securePassword123",
    "role": "user"
}
Response Example:
json
Copy code
{
    "message": "User registered successfully"
}



2. User Login
Users can log in using their credentials to get a JWT token for authentication.
Tokens are required for accessing protected routes.
Endpoint:
POST /api/auth/login
Request Example:
json
Copy code
{
    "username": "admin",
    "password": "admin123"
}
Response Example:
json
Copy code
{
    "token": "your-jwt-token"
}



3. List All Users
Lists all registered users.
Accessible without authentication (for demonstration purposes).
Endpoint:
GET /api/users
Response Example:
json
Copy code
[
    {
        "id": 1,
        "username": "admin",
        "role": "admin"
    },
    {
        "id": 2,
        "username": "newUser",
        "role": "user"
    }
]




4. Update User
Allows updating user details like username or password.
Passwords are re-hashed during updates for consistent security.
Endpoint:
PUT /api/users/:username
Request Example:
json
Copy code
{
    "password": "newSecurePassword123"
}
Response Example:
json
Copy code
{
    "message": "User with username \"admin\" updated successfully"
}



5. Delete User
Deletes a user by their username.
Endpoint:
DELETE /api/users/:username
Response Example:
json
Copy code
{
    "message": "User with username \"admin\" deleted successfully"
}




6. Admin Dashboard (Protected Route)
Accessible only to users with the role admin.
Requires a valid JWT token.
Endpoint:
GET /api/admin/admin-dashboard
Headers:
Authorization: Bearer <your-jwt-token>
Response Example (for Admins):
json
Copy code
{
    "message": "Welcome to the Admin Dashboard"
}
Response Example (for non-Admins):
json
Copy code
{
    "message": "Admin access required"
}




How to Run the Project
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node index.js
Access the APIs at:

Base URL: http://localhost:3000
Technologies Used
Node.js: Server-side JavaScript runtime.
Express.js: Framework for creating APIs.
bcrypt: Password hashing library for security.
jsonwebtoken (JWT): Token-based authentication.
Postman: For testing APIs.
