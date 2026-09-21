# RideIntelliX: Smart Bike and Scooter Rental System 🛵⚡

A full-stack, role-based two-wheeler rental platform built with the **MERN Stack**. **RideIntelliX** enables urban commuters and students to book affordable bikes and scooters for short-duration travel, featuring integrated online payments, dynamic inventory management, and an administrative control suite.

---

## 📌 Project Overview

Urban micro-mobility often suffers from high costs, manual booking processes, and lack of vehicle tracking. **RideIntelliX** solves this by providing an automated, paperless booking system. Users can browse available bikes and scooters, check real-time availability and pricing, make secure payments via **Razorpay**, and manage their rental history. 

This project served as the foundational milestone in mastering full-stack MERN engineering, leading the architecture and core development of real-world RESTful services and relational business logic inside a document database.

---

## ✨ Key Features

* **Vehicle Browsing & Filtering**: Explore verified bikes and scooters with detailed specifications, rental rates, and imagery.
* **Instant Booking System**: Select rental time windows, calculate automated fare estimates, and reserve two-wheelers in real time.
* **Razorpay Payment Integration**: Secure, streamlined checkout process with programmatic signature verification and transaction records.
* **Role-Based Access Control (RBAC)**: Distinct permissions and interface views for standard Users and System Administrators.
* **Admin Dashboard**: Dedicated portal to add/edit vehicles, handle upload assets, monitor fleet statuses, and audit bookings.
* **Ratings & Reviews**: Feedback pipeline allowing customers to submit reviews and rate vehicles post-trip.
* **Secure Authentication**: Protected endpoints and session verification powered by JSON Web Tokens (JWT) and Bcrypt.js password encryption.

---

## 🛠️ Tech Stack

### Frontend
* **Core**: React.js, Vite
* **Routing & Architecture**: React Router DOM, Modular Component Design
* **Styling**: Modern Vanilla CSS (`Index.css`, `App.css`)

### Backend
* **Environment**: Node.js & Express.js
* **Database**: MongoDB with Mongoose ODM
* **Payment Gateway**: Razorpay SDK
* **File Uploads**: Multer (Local disk storage inside `uploads/`)
* **Security**: JWT, Bcrypt.js, CORS, Custom Error & Auth Middlewares

---

## 📂 Project Structure

```text
RideIntelliX/
├── backend/
│   ├── admin/               # Administrative workflow handlers
│   ├── config/
│   │   ├── db.js            # MongoDB connection
│   │   └── razorpay.js      # Razorpay client instance
│   ├── controllers/
│   │   ├── authController.js    # Register & login controllers
│   │   ├── bookingController.js # Reservation workflow
│   │   ├── paymentController.js # Razorpay order creation & verification
│   │   └── vehicleController.js # Fleet CRUD operations
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT verification & role validation
│   │   └── errorMiddleware.js   # Centralized error handler
│   ├── models/
│   │   ├── Booking.js       # Rental transactions & timestamps
│   │   ├── Payment.js       # Payment logs & transaction IDs
│   │   ├── Review.js        # Feedback & star ratings
│   │   ├── Users.js         # User schemas & role definitions
│   │   └── Vehicle.js       # Two-wheeler inventory schema
│   ├── routes/
│   │   ├── bookingRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── UsersRoutes.js
│   │   └── vehicleRoutes.js
│   ├── uploads/             # Vehicle preview images
│   └── server.js            # Server bootstrap
│
└── client/
    ├── public/              # Static public assets
    ├── src/
    │   ├── Admindashboard/  # Vehicle fleet management & metrics
    │   ├── auth/            # Sign in and registration interfaces
    │   ├── cards/           # Vehicle showcase cards
    │   ├── components/      # Global layout components (Navbar, alerts)
    │   ├── footer/          # Footer section
    │   ├── profile/         # User booking history & details
    │   ├── vehicles/        # Inventory grid & single-vehicle view
    │   ├── App.jsx          # Route orchestration
    │   └── main.jsx         # Client mount point
    └── vite.config.js

```

---

## ⚙️ Installation & Setup

### Prerequisites

* [Node.js](https://nodejs.org/?utm_source=gemini) (v18.x or later recommended)
* [MongoDB](https://www.mongodb.com/?utm_source=gemini) (Local server or MongoDB Atlas URI)
* [Razorpay Test Account](https://razorpay.com/?utm_source=gemini) (Key ID & Key Secret)

---

### 1. Clone the Repository

```bash
git clone [https://github.com/Shivam16a/RideIntelliX_Smart_Bike_and_Scooter_Rental_System.git](https://github.com/Shivam16a/RideIntelliX_Smart_Bike_and_Scooter_Rental_System.git)
cd RideIntelliX

```

---

### 2. Backend Setup

1. Open a terminal and move to the backend folder:
```bash
cd backend

```


2. Install dependencies:
```bash
npm install

```


3. Create a `.env` file inside the `backend/` root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

```


4. Start the backend server:
```bash
npm run dev
# or node server.js

```



---

### 3. Client Setup

1. Open a second terminal window and navigate to `client/`:
```bash
cd client

```


2. Install dependencies:
```bash
npm install

```


3. Start the Vite development server:
```bash
npm run dev

```


4. Access the web application at:
```
http://localhost:5173

```



---

## 🔒 Environment Variables

| Variable | Scope | Description |
| --- | --- | --- |
| `PORT` | Backend | Port number for the Express server (Default: `5000`) |
| `MONGO_URI` | Backend | MongoDB database connection URI |
| `JWT_SECRET` | Backend | Secret string for token hashing and authentication |
| `RAZORPAY_KEY_ID` | Backend | Razorpay public test key |
| `RAZORPAY_KEY_SECRET` | Backend | Razorpay private secret key |

---

## 👥 Team & Acknowledgments

This application was engineered as a collaborative group initiative:

* **Shivam Kumar**: Team Lead & Primary Full-Stack Developer (System Architecture, REST APIs, Razorpay Integration, State Management, and Database Schemas).
* **Project Collaborators (3 members)**: Assisted with vehicle data collection, initial asset preparation, and reusable UI component drafting.

---

## 👤 Lead Author

* **GitHub**: [@Shivam16a](https://github.com/Shivam16a/RideIntelliX_Smart_Bike_and_Scooter_Rental_System.git)

