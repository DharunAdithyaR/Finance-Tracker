const express = require("express");

const {
  getCategoryAnalytics,
} = require(
  "../controllers/analyticsController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

router.get(
  "/categories",
  protect,
  getCategoryAnalytics
);

module.exports = router;