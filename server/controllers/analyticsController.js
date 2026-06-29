const Transaction = require("../models/Transaction");

const getCategoryAnalytics = async (req, res) => {
  try {
    const expenses = await Transaction.find({
      user: req.user._id,
      type: "expense",
    });

    const categoryMap = {};

    expenses.forEach((item) => {
      if (categoryMap[item.category]) {
        categoryMap[item.category] += item.amount;
      } else {
        categoryMap[item.category] = item.amount;
      }
    });

    const totalExpense = expenses.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    const result = Object.keys(categoryMap).map(
      (category) => ({
        category,
        amount: categoryMap[category],
        percentage:
          totalExpense > 0
            ? (
                (categoryMap[category] /
                  totalExpense) *
                100
              ).toFixed(1)
            : 0,
      })
    );

    res.json(result);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCategoryAnalytics,
};