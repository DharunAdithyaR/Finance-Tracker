import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function FinanceChart({ summary }) {
  const pieData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [
          summary.totalIncome || 0,
          summary.totalExpense || 0,
        ],
        backgroundColor: [
          "#22c55e", // Green
          "#ef4444", // Red
        ],
      },
    ],
  };

  const barData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [
          summary.totalIncome || 0,
          summary.totalExpense || 0,
        ],
        backgroundColor: [
          "#3B82F6", // Navy Blue
          "#A855F7", // Violet
        ],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Removes "Amount"
      },
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 my-6">
      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Income vs Expense
        </h2>

        <Pie data={pieData} />
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Comparison Chart
        </h2>

        <Bar
          data={barData}
          options={barOptions}
        />
      </div>
    </div>
  );
}

export default FinanceChart;