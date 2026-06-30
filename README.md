# 💰 Budget Buddy - Finance Tracker

A full-stack personal finance management application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application helps users manage income and expenses, plan budgets, analyze spending patterns, and generate financial reports.

## 🚀 Live Demo

### Frontend

https://finance-tracker-icqx-six.vercel.app/

### Backend API

https://finance-tracker-backend-8olx.onrender.com/

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes

### 💳 Transaction Management

* Add Transactions
* Edit Transactions
* Delete Transactions
* Income & Expense Tracking
* Category-wise Organization

### 📊 Dashboard

* Total Income
* Total Expenses
* Current Balance
* Recent Transactions

### 🎯 Budget Planner

* Set Monthly Budget
* Track Spending Against Budget
* Budget Monitoring

### 📈 Analytics

* Income vs Expense Analysis
* Category-wise Spending Insights
* Interactive Charts

### 📄 Reports

* Export Financial Reports as PDF
* Export Transaction Data as CSV

### 👤 Profile Management

* User Profile Information
* Secure Account Management

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Chart.js
* React ChartJS 2
* jsPDF
* jsPDF AutoTable

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js
* CORS

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas
* Version Control: Git & GitHub

---

## 📂 Project Structure

```text
Finance-Tracker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── package.json
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/DharunAdithyaR/Finance-Tracker.git

cd Finance-Tracker
```

### Backend Setup

```bash
cd server

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client

npm install
```

Start Frontend:

```bash
npm run dev
```

---

## 📸 Screenshots

### Dashboard

* Financial Summary Cards
* Recent Transactions
* Budget Tracking

### Transactions

* Add/Edit/Delete Transactions
* Paginated Transaction History

### Analytics

* Expense Analysis Charts
* Category-wise Insights

### Reports

* PDF Report Generation
* CSV Export

---

## 🔒 Security Features

* Password Hashing using bcrypt
* JWT Authentication
* Protected API Routes
* Secure User Data Storage

---

## 🎓 Learning Outcomes

This project demonstrates:

* Full-Stack MERN Development
* REST API Development
* Authentication & Authorization
* MongoDB Database Design
* State Management in React
* Data Visualization
* Cloud Deployment
* Git & GitHub Workflow

---

## 👨‍💻 Author

**Dharun Adithya**

GitHub:
https://github.com/DharunAdithyaR

---

## 📜 License

This project is developed for educational and portfolio purposes.
