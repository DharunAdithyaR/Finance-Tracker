function BudgetAlert({ summary }) {
  if (!summary?.totalIncome || summary.totalIncome <= 0) {
    return null;
  }

  const expensePercentage =
    (summary.totalExpense / summary.totalIncome) * 100;

  let message = "";
  let color = "";

  if (expensePercentage >= 90) {
    message =
      "⚠️ Warning: You have spent over 90% of your income.";
    color =
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  } else if (expensePercentage >= 70) {
    message =
      "⚠️ Caution: You have spent over 70% of your income.";
    color =
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
  } else {
    return null; // Hide the component when budget is under control
  }

  return (
    <div
      className={`${color} p-4 rounded-lg shadow font-semibold`}
    >
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span>{message}</span>

        <span className="font-bold">
          {expensePercentage.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}

export default BudgetAlert;