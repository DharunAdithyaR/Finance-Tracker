const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

// Database Connection
const connectDB = require("./config/db");

// Connect MongoDB
connectDB();

// Route Imports
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const profileRoutes =
require("./routes/profileRoutes");
const analyticsRoutes =
require("./routes/analyticsRoutes");

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Finance Tracker API Running");
});

// API Routes
app.use("/api/auth", authRoutes);

app.use(
  "/api/transactions",
  transactionRoutes
);

app.use(
  "/api/budget",
  budgetRoutes
);

app.use(
  "/api/profile",
  profileRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});