# MERN Authentication Project

A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring Material UI components.

## Features

- User registration and login
- JWT (JSON Web Token) authentication
- Protected routes
- Material UI components
- Responsive design
- Password hashing
- Input validation

## Tech Stack

### Frontend
- React.js
- Material UI
- React Router DOM
- Axios
- Vite (Build tool)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js

## Prerequisites

Before running this project, make sure you have:
- Node.js (v14+ recommended)
- MongoDB installed and running
- npm or yarn package manager

## Project Structure
project-root/
├── frontend/         # React frontend
├── backend/          # Node.js backend
└── .gitignore

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd mern-auth
2. Backend Setup
cd backend
npm install
Create a .env file in the backend directory:
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
3. Frontend Setup
 frontend
npm install
Running the Application
Start the Backend Server
backend
nodemon index.js
The server will run on http://localhost:5000
Start the Frontend Development Server
 frontend
npm run dev
The frontend will run on http://localhost:5173
API Endpoints
Auth Routes

POST /api/auth/register - Register a new user
POST /api/auth/login - Login user
GET /api/auth/profile - Get user profile (Protected route)

Environment Variables
Backend (.env)
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Frontend (.env)
VITE_API_URL=http://localhost:5000/api
