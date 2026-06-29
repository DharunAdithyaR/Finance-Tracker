import { useState, useEffect } from "react";
import API from "../services/api";

function TransactionForm({
  refreshData,
  editingTransaction,
  clearEdit,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title);
      setAmount(editingTransaction.amount);
      setType(editingTransaction.type);
      setCategory(editingTransaction.category);
    }
  }, [editingTransaction]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingTransaction) {
        await API.put(
          `/transactions/${editingTransaction._id}`,
          {
            title,
            amount,
            type,
            category,
          }
        );

        clearEdit();
      } else {
        await API.post("/transactions", {
          title,
          amount,
          type,
          category,
        });
      }

      setTitle("");
      setAmount("");
      setType("income");
      setCategory("");

      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setAmount("");
    setType("income");
    setCategory("");

    clearEdit();
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow p-5 rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        {editingTransaction
          ? "Edit Transaction"
          : "Add Transaction"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-3 rounded dark:bg-gray-700 dark:border-gray-600"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full mb-3 rounded dark:bg-gray-700 dark:border-gray-600"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          required
        />

        <select
          className="border p-2 w-full mb-3 rounded dark:bg-gray-700 dark:border-gray-600"
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
        >
          <option value="income">
            Income
          </option>

          <option value="expense">
            Expense
          </option>
        </select>

        <select
  className="border p-2 w-full mb-3 rounded dark:bg-gray-700 dark:border-gray-600"
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
  required
>
  <option value="">
    Select Category
  </option>

  <option value="Salary">
    Salary
  </option>

  <option value="Food">
    Food
  </option>

  <option value="Travel">
    Travel
  </option>

  <option value="Shopping">
    Shopping
  </option>

  <option value="Bills">
    Bills
  </option>

  <option value="Entertainment">
    Entertainment
  </option>

  <option value="Others">
    Others
  </option>
</select>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
          >
            {editingTransaction
              ? "Update Transaction"
              : "Add Transaction"}
          </button>

          {editingTransaction && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;