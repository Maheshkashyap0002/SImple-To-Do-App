# To-Do API Backend

Node.js, Express.js aur MongoDB par bana REST API backend. Yeh README currently enabled **Task API** ko document karta hai.

## Features

- Task create, read, update aur delete operations
- MongoDB me Mongoose ke through data persistence
- JSON request aur response support
- CORS enabled for frontend integration
- Environment variables ke through port aur database configuration

## Tech Stack

- Node.js
- Express.js 5
- MongoDB
- Mongoose
- dotenv
- CORS

## Project Structure

```text
Backend/
├── server.js
├── package.json
├── README.md
└── src/
    ├── app.js
    ├── config/
    │   └── db.js
    ├── controller/
    │   └── todo.controller.js
    ├── model/
    │   └── todo.model.js
    └── routes/
        └── todo.route.js
```

## Requirements

- Node.js 18 or later
- npm
- Local MongoDB server ya MongoDB Atlas connection string

## Installation

```bash
cd Backend
npm install
```

Project root me `.env` file banayein:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/todo-app
```

`MONGO_URI` ko apne local MongoDB ya MongoDB Atlas connection string se replace karein.

## Run the Server

Production-style start:

```bash
npm start
```

Development mode ke liye:

```bash
npm run run
```

Server ka default address:

```text
http://localhost:3000
```

Agar `PORT` environment variable set hai, to server us port par chalega.

## Base URL

```text
http://localhost:3000
```

Task endpoints ka base path:

```text
/api/task
```

## Health Check

### `GET /`

Server running hone par plain text response milta hai:

```text
Runing App
```

## Task API

### 1. Create a Task

```http
POST /api/task/create
Content-Type: application/json
```

Request body:

```json
{
  "title": "Learn Express.js"
}
```

Success response `201 Created`:

```json
{
  "message": "Todo created successfully",
  "task": {
    "_id": "665abc1234567890abcdef12",
    "title": "Learn Express.js",
    "completed": false,
    "createdAt": "2026-09-26T10:00:00.000Z",
    "updatedAt": "2026-09-26T10:00:00.000Z"
  }
}
```

`title` missing hone par `400 Bad Request`:

```json
{
  "message": "Title is required"
}
```

### 2. Get All Tasks

```http
GET /api/task/all
```

Success response `200 OK`:

```json
{
  "message": "Todos fetched successfully",
  "task": [
    {
      "_id": "665abc1234567890abcdef12",
      "title": "Learn Express.js",
      "completed": false,
      "createdAt": "2026-09-26T10:00:00.000Z",
      "updatedAt": "2026-09-26T10:00:00.000Z"
    }
  ]
}
```

Agar koi task nahi hai, response `400 Bad Request` hota hai:

```json
{
  "message": "No Task Availble"
}
```

### 3. Get a Task by ID

```http
GET /api/task/:id
```

Example:

```http
GET /api/task/665abc1234567890abcdef12
```

Success response `200 OK`:

```json
{
  "task": {
    "_id": "665abc1234567890abcdef12",
    "title": "Learn Express.js",
    "completed": false,
    "createdAt": "2026-09-26T10:00:00.000Z",
    "updatedAt": "2026-09-26T10:00:00.000Z"
  }
}
```

Task na milne par `404 Not Found`:

```json
{
  "message": "Task not found"
}
```

### 4. Update a Task

```http
PATCH /api/task/:id
Content-Type: application/json
```

Example:

```http
PATCH /api/task/665abc1234567890abcdef12
```

Request body me `title`, `completed`, ya dono fields bhej sakte hain:

```json
{
  "title": "Learn Node.js",
  "completed": true
}
```

Success response `200 OK`:

```json
{
  "message": "Todo updated successfully",
  "task": {
    "_id": "665abc1234567890abcdef12",
    "title": "Learn Node.js",
    "completed": true,
    "createdAt": "2026-09-26T10:00:00.000Z",
    "updatedAt": "2026-09-26T11:00:00.000Z"
  }
}
```

Task na milne par `404 Not Found`:

```json
{
  "message": "Todo not found"
}
```

### 5. Delete a Task

```http
DELETE /api/task/:id
```

Example:

```http
DELETE /api/task/665abc1234567890abcdef12
```

Success response `200 OK`:

```json
{
  "message": "Todo deleted successfully"
}
```

Task na milne par `404 Not Found`:

```json
{
  "message": "Todo not found"
}
```

## Task Data Model

| Field       | Type     | Required                | Default | Description                          |
| ----------- | -------- | ----------------------- | ------- | ------------------------------------ |
| `_id`       | ObjectId | Automatically generated | -       | Task identifier                      |
| `title`     | String   | Yes                     | -       | Task title; whitespace trim hota hai |
| `completed` | Boolean  | No                      | `false` | Task completion status               |
| `createdAt` | Date     | Automatically generated | -       | Creation timestamp                   |
| `updatedAt` | Date     | Automatically generated | -       | Last update timestamp                |

## Common Error Responses

Unknown route par `404 Not Found`:

```json
{
  "success": false,
  "message": "Route not found"
}
```

Database ya server-side error par generally `500 Internal Server Error` response milta hai:

```json
{
  "message": "Internal server error",
  "error": "Error details"
}
```

Create request me database error hone par message `error for creating Task` ho sakta hai.

## cURL Examples

Create:

```bash
curl -X POST http://localhost:3000/api/task/create -H "Content-Type: application/json" -d "{\"title\":\"Read API documentation\"}"
```

Get all:

```bash
curl http://localhost:3000/api/task/all
```

Update:

```bash
curl -X PATCH http://localhost:3000/api/task/TASK_ID -H "Content-Type: application/json" -d "{\"completed\":true}"
```

Delete:

```bash
curl -X DELETE http://localhost:3000/api/task/TASK_ID
```

## Notes

- MongoDB connection start hone se pehle `.env` me valid `MONGO_URI` hona chahiye.
- JSON requests ke liye `Content-Type: application/json` header use karein.
- Code me changes kiye bina sirf documentation update ki gayi hai.
