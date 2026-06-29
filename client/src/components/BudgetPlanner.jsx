import { useEffect, useState } from "react";
import API from "../services/api";

function BudgetPlanner() {
  const [budget, setBudget] = useState("");
  const [data, setData] = useState(null);

  const fetchBudget = async () => {
    try {
      const res = await API.get("/budget");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBudget();
  }, []);

  const saveBudget = async () => {
    try {
      await API.post("/budget", {
        monthlyBudget: Number(budget),
      });

      setBudget("");
      fetchBudget();
    } catch (error) {
      console.log(error);
    }
  };

  // Determine progress bar color
  const getBarColor = (usage) => {
    if (usage >= 100) {
      return "bg-red-500";
    } else if (usage >= 70) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Budget Planner
      </h2>

      <input
        type="number"
        placeholder="Monthly Budget"
        className="border p-2 rounded w-full mb-3 dark:bg-gray-700 dark:border-gray-600"
        value={budget}
        onChange={(e) =>
          setBudget(e.target.value)
        }
      />

      <button
        onClick={saveBudget}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Budget
      </button>

      {data && (
        <div className="mt-4 space-y-2">

          <p>
            <strong>Budget:</strong> ₹
            {data.monthlyBudget}
          </p>

          <p>
            <strong>Spent:</strong> ₹
            {data.spent}
          </p>

          <p>
            <strong>Remaining:</strong>{" "}
            <span
              className={
                data.remaining < 0
                  ? "text-red-600 font-bold"
                  : "text-green-600 font-bold"
              }
            >
              ₹{data.remaining}
            </span>
          </p>

          <p>
            <strong>Usage:</strong>{" "}
            {Number(data.usage).toFixed(1)}%
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-7 overflow-hidden mt-3">

            <div
              className={`${getBarColor(
                Number(data.usage)
              )} h-7 text-white text-center font-semibold flex items-center justify-center transition-all duration-500`}
              style={{
                width: `${Math.min(
                  Number(data.usage),
                  100
                )}%`,
              }}
            >
              {Number(data.usage).toFixed(1)}%
            </div>

          </div>

          {/* Budget Status */}
          {Number(data.usage) >= 100 ? (
            <p className="text-red-600 font-bold mt-2">
              ⚠️ Budget exceeded!
            </p>
          ) : Number(data.usage) >= 70 ? (
            <p className="text-yellow-600 font-bold mt-2">
              ⚠️ You are close to reaching your budget.
            </p>
          ) : (
            <p className="text-green-600 font-bold mt-2">
              ✅ Budget is under control.
            </p>
          )}

        </div>
      )}
    </div>
  );
}

export default BudgetPlanner;