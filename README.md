# 🍽️ Cafeteria Booking System

A full-stack Cafeteria Table Booking System that allows users to register, log in, and book tables at their favorite restaurants based on date, time, and meal type. Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🔧 Tech Stack

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT + Email OTP

---

## ✨ Features

### ✅ User Features
- User Registration & Login
- OTP verification via email
- Secure JWT-based Authentication
- Book tables for specific date, time, meal type (Breakfast, Lunch, Dinner)
- View all your bookings

### ✅ Admin/Owner Features
- (Optional for future extension) Add and manage restaurant tables and time slots

---

## 🧱 Project Structure

### Backend (`/backend`)
📁 backend
┣ 📁 config # MongoDB connection config
┣ 📁 controllers # Business logic (auth, booking)
┣ 📁 models # Mongoose schemas
┣ 📁 routes # Express routes
┣ 📁 utils # Email OTP sender, JWT utility
┣ 📄 server.js # Entry point

shell
Copy
Edit

### Frontend (`/frontend`)
📁 frontend
┣ 📁 components # Login, Register, Booking Form, View Bookings
┣ 📁 context # AuthContext for user session management
┣ 📁 pages # Home, Dashboard
┣ 📄 App.js # Route definitions
┣ 📄 index.js # ReactDOM root

yaml
Copy
Edit

---

## 📦 Installation Instructions

### 1. Clone the repository

git clone https://github.com/your-username/cafeteria-booking-system.git
cd cafeteria-booking-system
🚀 Backend Setup
bash
Copy
Edit
cd backend
npm install
Create .env file
env
Copy
Edit
PORT=8081
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
Run Backend
bash
Copy
Edit
node server.js
💻 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Frontend will run on http://localhost:3000 and connect to the backend API.

📡 API Endpoints
Authentication
POST /api/auth/register

POST /api/auth/login


Bookings
POST /api/bookings/table — Book a table

GET /api/bookings?email={userEmail} — Get user bookings
