function RecentActivity({ transactions }) {
  const recentTransactions = [...transactions]
    .sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    )
    .slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-xl shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        Recent Activity
      </h2>

      {recentTransactions.length > 0 ? (
        recentTransactions.map(
          (item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2 transition"
            >
              <div>
                <p className="font-semibold text-lg">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <p
                className={`text-lg font-bold ${
                  item.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.type === "income"
                  ? "+"
                  : "-"}
                ₹{item.amount}
              </p>
            </div>
          )
        )
      ) : (
        <div className="text-center py-6 text-gray-500">
          No recent transactions
        </div>
      )}
    </div>
  );
}

export default RecentActivity;