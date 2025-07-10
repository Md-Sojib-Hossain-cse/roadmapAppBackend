# 🚀 RoadmapApp – Backend

This is the backend repository for **RoadmapApp**, a full-stack web application that helps users explore, create, and interact with learning or project roadmaps.

Built using **Node.js, Express.js, MongoDB**, and **TypeScript**, this backend is modular, secure, and scalable.

---

## 🌐 Live URLs

- **Frontend:** [https://roadmap-app-frontend007.vercel.app](https://roadmap-app-frontend007.vercel.app)
- **Backend:** [https://roadmap-app-backend.vercel.app](https://roadmap-app-backend.vercel.app)

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- TypeScript
- Zod (validation)
- JWT (authentication)
- dotenv, cookie-parser, cors

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites

- Node.js (v16+)
- npm
- MongoDB URI

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/roadmap-app-backend.git
cd roadmap-app-backend
```

### Install dependencies

```bash
npm install
```

### Create .env file in root

```bash
NODE_ENV=development
PORT=5000
DATABASE_URL=your_mongodb_connection_string
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=your_jwt_secret
```

### Run the development server

```bash
npm run dev
```

### 📁 Folder Structure

```bash
src/
│
├── app/
│ ├── config/ # App config (env, DB)
│ ├── errors/ # Error handlers
│ ├── interface/ # Type definitions
│ ├── middlewares/ # Middleware (auth, validation, errors)
│ ├── modules/ # Feature modules
│ │ └── [moduleName]/
│ │ ├── interface.ts
│ │ ├── model.ts
│ │ ├── validations.ts
│ │ ├── service.ts
│ │ ├── controller.ts
│ │ └── routes.ts
│ ├── routes/ # Route aggregation
│ ├── utils/ # Utility functions
│ ├── app.ts # Express app config
│ └── server.ts # App entry point
```

### 🛡 Middleware & Configuration

### Auth Middleware

Verifies JWT tokens in the Authorization header and attaches decoded user to req.user.

- Global Error Handler

Gracefully handles:

- Zod validation errors

- Mongoose Validation, Cast, and Duplicate Key errors

- Custom AppError instances

- Generic errors

- 404 Middleware

Unmatched routes return:

```bash
{
"success": false,
"message": "API not found!",
"error": ""
}
```

### CORS

Enabled for:

http://localhost:5173

https://roadmap-app-frontend007.vercel.app

https://roadmap-6lz5229iq-md-sojib-hossain-cses-projects.vercel.app

### 🔐 Authentication

JWT-based authentication using jsonwebtoken

Protected routes require a Bearer token in the Authorization header

🔑 Example Header:

```bash
Authorization: Bearer your_jwt_token_here
```

### 📚 API Endpoints

All routes are prefixed with https://roadmap-app-backend.vercel.app/api

### 👤 User Module

Base path: https://roadmap-app-backend.vercel.app/api/users

Method Endpoint Description Auth Required

- POST /create-user Create a new user ❌

- GET /:id Get user by ID ❌

- GET / Get all users ❌

📥 Example Payload

```bash
{
  "name": "MD SOJIB HOSSAIN",
  "email": "sojib1@example.com",
  "password": "securepassword123",
  "image": "https://example.com/profile.jpg",
  "gender": "male",
  "role": "user",
  "isActive": true
}
```

### 🔐 Auth Module

Base path: /api/auth

Method Endpoint Description Auth Required
POST /login Login a user ❌

📥 Example Payload

```bash
{
  "email": "bottle@cap.com",
  "password": "bottle@cap.com"
}
```

### 🛤 Roadmap Items Module

Base path: /api/roadmap

Method Endpoint Description Auth Required

- POST /create-roadmap Create a roadmap item ✅

- GET /:id Get roadmap item by ID ✅

- GET / Get all roadmap items ✅

- POST /upvote/:id Add upvote to roadmap item ✅

- DELETE /upvote/:id Remove upvote from roadmap item ✅

📥 Example Payload (Create)

```bash
{
  "title": "Search Roadmap Items",
  "description": "Allow users to search roadmap items by keyword (title or description).",
  "status": "Completed",
  "category": "Functionality",
  "upvotes": 47,
  "items": [
    "Build a search input with debounce",
    "Filter roadmap items in real time based on query",
    "Highlight matched text in results",
    "Handle empty or no-result cases gracefully"
  ]
}
```

📥 Example Payload (Upvote)

```bash
{
  "userId": "6859a0dd71ead28836a15745",
  "email": "sojib@example.com"
}
```

📥 Example Payload (Remove Upvote)

```bash
{
  "userId": "6859a0dd71ead28836a15745",
  "email": "sojib@example.com"
}
```

💬 Comments Module
Base path: /api/comments

Method Endpoint Description Auth Required

- GET / Get all comments ❌

- POST /create-comment Create a comment ❌

- PATCH /:id Update a comment by ID ✅

- DELETE /:id Delete a comment by ID ✅

- POST /:commentId/create-reply Create a reply to a comment ✅

📥 Example Payload (Create Comment)

```bash
{
  "userId": "6859a0dd71ead28836a15745",
  "itemId": "6859a2fd682f151da73565c7",
  "text": "hello this is a test comment"
}
```

📥 Example Payload (Reply)

```bash
{
  "commentId": "6859a6740b42f07b5d71ecfc",
  "userId": "6859a0dd71ead28836a15745",
  "text": "test reply"
}
```

## Postman docs :

https://team-2-0895.postman.co/workspace/My-Workspace~117a2bb9-1975-4bf7-8e9e-34e9cb61a9bb/collection/39786680-1698646f-c559-4e52-808a-ba91c018c30b?action=share&creator=39786680

### 🔮 Future Enhancements

Swagger / Postman API docs

Refresh token + token expiry handling

Role-based access control (RBAC)

Pagination and filtering

Admin panel support

### 👤 Author

MD Sojib Hossain
📧 sojibhossain.cse@gmail.com
