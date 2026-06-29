function AIInsights({
  summary,
  transactions,
}) {
  const insights = [];

  // Savings Rate
  if (
    summary.totalIncome > 0
  ) {
    const savingsRate =
      Math.round(
        (summary.balance /
          summary.totalIncome) *
          100
      );

    insights.push(
      `Savings rate: ${savingsRate}%`
    );
  }

  // Expense Check
  if (
    summary.totalExpense >
    summary.totalIncome * 0.7
  ) {
    insights.push(
      "Expenses are high compared to income."
    );
  } else {
    insights.push(
      "Expenses are under control."
    );
  }

  // Balance Check
  if (
    summary.balance > 0
  ) {
    insights.push(
      "Great job maintaining a positive balance."
    );
  } else {
    insights.push(
      "Your expenses exceed your income."
    );
  }

  // Category Analysis
  const categoryTotals = {};

  transactions.forEach(
    (transaction) => {
      if (
        transaction.type ===
        "expense"
      ) {
        categoryTotals[
          transaction.category
        ] =
          (categoryTotals[
            transaction.category
          ] || 0) +
          transaction.amount;
      }
    }
  );

  const highestCategory =
    Object.keys(
      categoryTotals
    ).reduce(
      (a, b) =>
        categoryTotals[a] >
        categoryTotals[b]
          ? a
          : b,
      Object.keys(
        categoryTotals
      )[0]
    );

  if (highestCategory) {
    insights.push(
      `${highestCategory} is your highest spending category.`
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-xl shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        🤖 AI Insights
      </h2>

      <ul className="space-y-3">

        {insights.map(
          (
            insight,
            index
          ) => (
            <li
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded"
            >
              • {insight}
            </li>
          )
        )}

      </ul>

    </div>
  );
}

export default AIInsights;