const User = require("../models/User");
const Transaction = require("../models/Transaction");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).select("-password");

    const transactions =
      await Transaction.find({
        user: req.user._id,
      });

    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    res.json({
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      totalTransactions:
        transactions.length,
      totalIncome,
      totalExpense,
      balance:
        totalIncome - totalExpense,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
};