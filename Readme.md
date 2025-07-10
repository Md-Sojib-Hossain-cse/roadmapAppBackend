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

npm install

### Create .env file in root

NODE_ENV=development
PORT=5000
DATABASE_URL=your_mongodb_connection_string
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=your_jwt_secret

### Run the development server

npm run dev

### 📁 Folder Structure

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

### 🛡 Middleware & Configuration

Request Validation
Custom validateRequest middleware uses Zod to validate request bodies and ensure data integrity.

Auth Middleware
Verifies JWT tokens in the Authorization header and attaches decoded user to req.user.

Global Error Handler
Gracefully handles:

Zod validation errors

Mongoose Validation, Cast, and Duplicate Key errors

Custom AppError instances

Generic errors

404 Middleware
Unmatched routes return:

{
"success": false,
"message": "API not found!",
"error": ""
}
