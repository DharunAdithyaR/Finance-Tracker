const express = require("express");

const {
  setBudget,
  getBudget,
} = require(
  "../controllers/budgetController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

router.post(
  "/",
  protect,
  setBudget
);

router.get(
  "/",
  protect,
  getBudget
);

module.exports = router;