const Budget = require("../models/Budget");
const Transaction = require("../models/Transaction");

// Create or Update Budget
const setBudget = async (req, res) => {
  try {
    const { monthlyBudget } = req.body;

    let budget = await Budget.findOne({
      user: req.user._id,
    });

    if (budget) {
      budget.monthlyBudget = monthlyBudget;
      await budget.save();
    } else {
      budget = await Budget.create({
        user: req.user._id,
        monthlyBudget,
      });
    }

    res.json(budget);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Budget Details
const getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({
      user: req.user._id,
    });

    const transactions =
      await Transaction.find({
        user: req.user._id,
        type: "expense",
      });

    const spent =
      transactions.reduce(
        (sum, item) => sum + item.amount,
        0
      );

    const monthlyBudget =
      budget?.monthlyBudget || 0;

    const remaining =
      monthlyBudget - spent;

    const usage =
      monthlyBudget > 0
        ? ((spent / monthlyBudget) * 100).toFixed(1)
        : 0;

    res.json({
      monthlyBudget,
      spent,
      remaining,
      usage,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  setBudget,
  getBudget,
};