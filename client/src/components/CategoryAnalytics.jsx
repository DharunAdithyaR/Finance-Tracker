import { useEffect, useState } from "react";
import API from "../services/api";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

function CategoryAnalytics() {
  const [data, setData] = useState([]);

  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
    "#f59e0b",
    "#8b5cf6",
    "#14b8a6",
  ];

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res =
        await API.get(
          "/analytics/categories"
        );

      setData(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        Category Analytics
      </h2>

      {data.length > 0 ? (
        <>
          <PieChart
            width={400}
            height={300}
          >
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              outerRadius={100}
              label
            >
              {data.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>

          <div className="mt-4">
            {data.map((item) => (
              <div
                key={item.category}
                className="flex justify-between border-b py-2"
              >
                <span>
                  {item.category}
                </span>

                <span>
                  ₹{item.amount} (
                  {item.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>
          No expense data found
        </p>
      )}

    </div>
  );
}

export default CategoryAnalytics;