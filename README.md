# 🗳️ MERN Online Voting System

A full-stack voting application built using the MERN stack (MongoDB, Express, React, Node.js). This system allows users to securely vote while providing admin controls for managing elections and results.

---

## 🚀 Features

* User authentication (login/signup)
* Role-based access (Admin / User)
* Secure voting system (one vote per user)
* Admin dashboard to manage candidates and results
* RESTful API architecture
* Modular backend structure with middleware and error handling

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* HTML, CSS, Tailwind (if used)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Other Tools**

* JWT Authentication (if used)
* Zod / validation (if used)

---

## 📂 Project Structure

```
client/        # React frontend
server/        # Node.js backend
routes/        # API routes
controllers/   # Business logic
models/        # Database schemas
middleware/    # Auth & error handling
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-online-voting-system.git
cd mern-online-voting-system
```

### 2. Install dependencies

For backend:

```bash
cd server
npm install
```

For frontend:

```bash
cd client
npm install
```

---

### 3. Setup environment variables

Create a `.env` file in the server folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 4. Run the project

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm start
```

---

## 📌 API Endpoints (Sample)

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user
* `GET /api/candidates` → Fetch candidates
* `POST /api/vote` → Cast vote

---

## 🔒 Key Concepts Implemented

* Authentication using JWT
* Role-based authorization
* REST API design
* Middleware architecture
* Error handling and validation

---

## 🌐 Deployment

*(Add this after deployment)*
Live Demo: https://your-link.com

---

## 📸 Screenshots

*(Add UI screenshots here later for better impact)*

---

## 👨‍💻 Author

**Gurram Siva Chandu**
GitHub: https://github.com/chandu14321
LinkedIn: https://www.linkedin.com/in/chandu-gurram-0593882a1/
