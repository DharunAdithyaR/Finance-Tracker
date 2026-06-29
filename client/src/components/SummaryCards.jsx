function SummaryCards({ summary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

      {/* Total Income */}
      <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2 className="text-lg font-semibold">
          Total Income
        </h2>

        <p className="text-3xl md:text-4xl font-bold mt-3">
          ₹{summary.totalIncome || 0}
        </p>
      </div>

      {/* Total Expense */}
      <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2 className="text-lg font-semibold">
          Total Expense
        </h2>

        <p className="text-3xl md:text-4xl font-bold mt-3">
          ₹{summary.totalExpense || 0}
        </p>
      </div>

      {/* Current Balance */}
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2 className="text-lg font-semibold">
          Current Balance
        </h2>

        <p className="text-3xl md:text-4xl font-bold mt-3">
          ₹{summary.balance || 0}
        </p>
      </div>

      {/* Total Transactions */}
      <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2 className="text-lg font-semibold">
          Total Transactions
        </h2>

        <p className="text-3xl md:text-4xl font-bold mt-3">
          {summary.totalTransactions || 0}
        </p>
      </div>

    </div>
  );
}

export default SummaryCards;