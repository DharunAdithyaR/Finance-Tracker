import { useState } from "react";
import API from "../services/api";

function TransactionList({
transactions,
refreshData,
onEdit,
}) {
const [currentPage, setCurrentPage] =
useState(1);

const transactionsPerPage = 5;

const handleDelete = async (id) => {
try {
await API.delete(`/transactions/${id}`);
refreshData();
} catch (error) {
console.log(error);
alert("Failed to delete transaction");
}
};

const indexOfLastTransaction =
currentPage * transactionsPerPage;

const indexOfFirstTransaction =
indexOfLastTransaction -
transactionsPerPage;

const currentTransactions =
transactions.slice(
indexOfFirstTransaction,
indexOfLastTransaction
);

const totalPages = Math.ceil(
transactions.length /
transactionsPerPage
);

return ( <div className="bg-white dark:bg-gray-800 dark:text-white shadow p-5 rounded-lg">

  <h2 className="text-xl font-bold mb-4">
    Transaction History
  </h2>

  <div className="overflow-x-auto">

    <table className="w-full border-collapse">

      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700">
          <th className="border p-2">
            Title
          </th>

          <th className="border p-2">
            Amount
          </th>

          <th className="border p-2">
            Type
          </th>

          <th className="border p-2">
            Category
          </th>

          <th className="border p-2">
            Action
          </th>
        </tr>
      </thead>

      <tbody>

        {currentTransactions.length >
        0 ? (
          currentTransactions.map(
            (item) => (
              <tr key={item._id}>

                <td className="border p-2">
                  {item.title}
                </td>

                <td className="border p-2">
                  ₹{item.amount}
                </td>

                <td className="border p-2">
                  {item.type}
                </td>

                <td className="border p-2">
                  {item.category}
                </td>

                <td className="border p-2">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        onEdit(item)
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          item._id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            )
          )
        ) : (
          <tr>
            <td
              colSpan="5"
              className="text-center p-4"
            >
              No transactions found
            </td>
          </tr>
        )}

      </tbody>

    </table>

  </div>

  {totalPages > 1 && (
    <div className="flex justify-center items-center gap-4 mt-6">

      <button
        disabled={
          currentPage === 1
        }
        onClick={() =>
          setCurrentPage(
            currentPage - 1
          )
        }
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Previous
      </button>

      <span className="font-semibold">
        Page {currentPage} of{" "}
        {totalPages}
      </span>

      <button
        disabled={
          currentPage ===
          totalPages
        }
        onClick={() =>
          setCurrentPage(
            currentPage + 1
          )
        }
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Next
      </button>

    </div>
  )}

</div>

);
}

export default TransactionList;
