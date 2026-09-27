# To-Do Web App Backend

## 1. Project Description

This project is a backend service for a To-Do Web Application built using Node.js, Express.js, MongoDB, and JWT-based authentication. It allows users to register, log in, manage their own tasks securely, and protect each task so that users can only access their own data.

The backend follows a clean MVC-style project structure with dedicated controllers, routes, middleware, models, and configuration files. It is designed to be beginner-friendly, secure, and easy to extend for frontend integration.

---

## 2. Features

- User registration with secure password hashing using bcrypt
- User login with JWT authentication
- JWT stored in HTTP cookies for session management
- Protected routes using authentication middleware
- CRUD operations for to-do tasks
- Each task is associated with the logged-in user
- Data stored in MongoDB using Mongoose
- Environment variable support using dotenv
- CORS enabled for frontend communication

---

## 3. Tech Stack

| Technology    | Purpose                                    |
| ------------- | ------------------------------------------ |
| Node.js       | JavaScript runtime for backend development |
| Express.js    | Web framework for creating REST APIs       |
| MongoDB       | NoSQL database for storing users and tasks |
| Mongoose      | MongoDB object modeling and validation     |
| JWT           | Secure token-based authentication          |
| bcrypt        | Password hashing for user security         |
| cookie-parser | Parse and read cookies from requests       |
| CORS          | Allow requests from frontend domains       |
| dotenv        | Load environment variables from .env file  |

---

## 4. Project Folder Structure

```bash
Backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controller/
│   │   ├── auth.controller.js
│   │   └── todo.controller.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── model/
│   │   ├── user.model.js
│   │   └── todo.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── todo.route.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## 5. Installation Guide

Follow the steps below to set up the project locally.

### Prerequisites

- Node.js installed on your machine
- MongoDB running locally or a MongoDB Atlas connection string
- npm or yarn package manager

### Step 1: Clone or Open the Project

```bash
cd Backend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment Variables

Create a `.env` file in the `Backend` folder and add the required variables.

### Step 4: Start the Server

```bash
npm start
```

If the project uses `nodemon` for development, then you can run:

```bash
npm run dev
```

---

## 6. Environment Variables

Create a `.env` file in the `Backend` directory with variables similar to the following:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_jwt_secret_key
```

### Variable Description

| Variable   | Description                                   |
| ---------- | --------------------------------------------- |
| PORT       | Port number on which the backend runs         |
| MONGO_URI  | MongoDB connection string                     |
| JWT_SECRET | Secret key used to sign and verify JWT tokens |

> Note: Adjust the values based on your MongoDB setup and deployment environment.

---

## 7. Running the Project Locally

After installation and `.env` configuration, start the backend:

```bash
npm start
```

The server will run on:

```bash
http://localhost:3000
```

Make sure MongoDB is running before starting the server.

---

## 8. API Base URL

### Local

```text
http://localhost:3000
```

### Production

```text
https://to-do-web-app-h132.onrender.com/
```

---

## 9. Complete API Documentation

### Authentication APIs

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Log in an existing user  |
| POST   | `/api/auth/logout`   | Log out the current user |

### Todo APIs

| Method | Endpoint         | Description                          |
| ------ | ---------------- | ------------------------------------ |
| POST   | `/api/task`     | Create a new todo task               |
| GET    | `/api/task`     | Get all tasks for the logged-in user |
| GET    | `/api/task/:id` | Get a single task by ID              |
| PATCH  | `/api/task/:id` | Update a todo task                   |
| DELETE | `/api/task/:id` | Delete a todo task                   |

> All todo APIs require authentication. The JWT token must be sent through cookies.

---

## 10. Authentication APIs

### 1. Register User

#### Endpoint

```http
POST /api/auth/register
```

#### Request Body

```json
{
  "username": "maheshkumar",
  "email": "mahesh@example.com",
  "password": "Mahesh@123"
}
```

#### Success Response

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "USER_ID",
    "username": "maheshkumar",
    "email": "mahesh@example.com"
  }
}
```

---

### 2. Login User

#### Endpoint

```http
POST /api/auth/login
```

#### Request Body

```json
{
  "username": "maheshkumar",
  "password": "Mahesh@123"
}
```

The login API should also support email if the backend allows username or email.

#### Example Using Email

```json
{
  "email": "mahesh@example.com",
  "password": "Mahesh@123"
}
```

#### Success Response

```json
{
  "message": "User Logged in successfully",
  "user": {
    "id": "USER_ID",
    "username": "maheshkumar",
    "email": "mahesh@example.com"
  }
}
```

#### Notes

- The JWT token is stored in an HTTP cookie.
- The token is later used to authenticate protected todo requests.

---

### 3. Logout User

#### Endpoint

```http
POST /api/auth/logout
```

#### Success Response

```json
{
  "message": "User logged out successfully"
}
```

---

## 11. Todo APIs

All Todo APIs require authentication. The JWT token must be sent through cookies.

### 1. Create Task

#### Endpoint

```http
POST /api/todos
```

#### Request Body

```json
{
  "title": "Learn Express.js"
}
```

#### Success Response

```json
{
  "message": "Todo created successfully",
  "task": {
    "_id": "TODO_ID",
    "title": "Learn Express.js",
    "completed": false,
    "user": "USER_ID"
  }
}
```

---

### 2. Get All Tasks

#### Endpoint

```http
GET /api/todos
```

#### Success Response

```json
{
  "message": "Tasks fetched successfully",
  "task": [
    {
      "_id": "TODO_ID",
      "title": "Learn Node.js",
      "completed": false,
      "user": "USER_ID"
    }
  ]
}
```

> Only the logged-in user's tasks should be returned.

---

### 3. Get Single Task

#### Endpoint

```http
GET /api/todos/:id
```

#### Example

```http
GET /api/todos/TODO_ID
```

#### Success Response

```json
{
  "task": {
    "_id": "TODO_ID",
    "title": "Learn Node.js",
    "completed": false,
    "user": "USER_ID"
  }
}
```

---

### 4. Update Task

#### Endpoint

```http
PATCH /api/todos/:id
```

#### Example

```http
PATCH /api/todos/TODO_ID
```

This API supports partial updates.

#### Example Request 1

```json
{
  "title": "Learn React"
}
```

#### Example Request 2

```json
{
  "completed": true
}
```

#### Example Request 3

```json
{
  "title": "Learn React",
  "completed": true
}
```

#### Success Response

```json
{
  "message": "Todo updated successfully",
  "task": {
    "_id": "TODO_ID",
    "title": "Learn React",
    "completed": true,
    "user": "USER_ID"
  }
}
```

---

### 5. Delete Task

#### Endpoint

```http
DELETE /api/todos/:id
```

#### Example

```http
DELETE /api/todos/TODO_ID
```

#### Success Response

```json
{
  "message": "Todo deleted successfully"
}
```

---

## 12. Request and Response Examples

### Register Example

```json
{
  "username": "maheshkumar",
  "email": "mahesh@example.com",
  "password": "Mahesh@123"
}
```

#### Response

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "USER_ID",
    "username": "maheshkumar",
    "email": "mahesh@example.com"
  }
}
```

### Login Example

```json
{
  "email": "mahesh@example.com",
  "password": "Mahesh@123"
}
```

#### Response

```json
{
  "message": "User Logged in successfully",
  "user": {
    "id": "USER_ID",
    "username": "maheshkumar",
    "email": "mahesh@example.com"
  }
}
```

### Create Todo Example

```json
{
  "title": "Learn Express.js"
}
```

#### Response

```json
{
  "message": "Todo created successfully",
  "task": {
    "_id": "TODO_ID",
    "title": "Learn Express.js",
    "completed": false,
    "user": "USER_ID"
  }
}
```

---

## 13. Authentication Flow

The authentication flow in this project is simple and secure:

1. The user sends a registration request to `/api/auth/register`.
2. The backend hashes the password with bcrypt before saving it to MongoDB.
3. The user logs in using `/api/auth/login`.
4. If credentials are valid, the server creates a JWT containing:

```json
{
  "id": "userId"
}
```

5. The JWT token is stored in an HTTP cookie.
6. When the user accesses a protected todo route, the middleware reads the token from `req.cookies.token`.
7. The middleware verifies the token and decodes the user payload.
8. The decoded user information is stored in `req.user`.
9. The API then uses `req.user.id` to identify the logged-in user and fetch or modify only that user’s tasks.

---

## 14. User Todo Security Explanation

This project implements strong task-level security by ensuring that every todo belongs to a specific user.

### Important Security Rule

Each todo includes a user reference:

```json
{
  "title": "Learn Node.js",
  "completed": false,
  "user": "ObjectId of logged-in user",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

The user ID is automatically taken from:

```js
req.user.id;
```

The user ID is never manually sent from the frontend.

### Example Query Logic

#### Fetch all tasks

```js
Todo.find({
  user: req.user.id,
});
```

#### Fetch, update, or delete a single task

```js
{
  _id: req.params.id,
  user: req.user.id
}
```

This ensures that one user cannot access, update, or delete another user’s tasks.

---

## 15. HTTP Status Codes

The backend uses standard HTTP status codes for requests.

| Status Code | Meaning                       |
| ----------- | ----------------------------- |
| 200         | Request succeeded             |
| 201         | Resource created successfully |
| 400         | Bad request or invalid input  |
| 401         | Unauthorized or invalid token |
| 403         | Forbidden access              |
| 404         | Resource not found            |
| 500         | Internal server error         |

---

## 16. Error Responses

When an error occurs, the backend typically responds with a JSON message describing the issue.

### Example Authentication Error

```json
{
  "message": "Unauthorized"
}
```

### Example Not Found Error

```json
{
  "message": "Todo not found"
}
```

### Example Validation Error

```json
{
  "message": "Please provide valid input"
}
```

### Example Server Error

```json
{
  "message": "Internal server error"
}
```

---

## 17. Deployment Information

This backend can be deployed to cloud hosting platforms such as Render, Railway, or similar services.

### Production URL

```text
https://your-backend-url.onrender.com
```

### Deployment Notes

- Set environment variables in the hosting platform
- Use the production MongoDB connection string in `MONGO_URI`
- Set a strong `JWT_SECRET` value
- Ensure CORS is configured to allow requests from the frontend app
- Make sure the server listens to the correct `PORT` provided by the deployment service

---

## 18. Future Improvements

The project can be improved with the following enhancements:

- Add email verification for user registration
- Add password reset and forgot-password functionality
- Add task due dates and priority levels
- Add search, filtering, and sorting for todo items
- Add refresh token support
- Add unit and integration tests
- Improve validation and error handling
- Add role-based access control for future admin features

---

## 19. Author

### Author

Mahesh Kumar

### Project

To-Do Web App Backend

### Technologies Used

Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, cookie-parser, CORS, dotenv

---

## 20. Summary

This backend provides a complete authentication and todo management system for a modern web application. It is secure, user-specific, and beginner-friendly while following standard API patterns used in production-ready Node.js applications.

If you are building the frontend side of the project, this backend is ready to be connected using cookie-based authentication and JSON API requests.
