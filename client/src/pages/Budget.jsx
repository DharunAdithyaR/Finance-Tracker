import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import BudgetPlanner from "../components/BudgetPlanner";
import BudgetAlert from "../components/BudgetAlert";

function Budget() {
  const [summary, setSummary] = useState({});

  const fetchData = async () => {
    try {
      const res = await API.get(
        "/transactions/summary"
      );

      setSummary(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="ml-64 min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">
          Budget Planner
        </h1>

        <BudgetAlert summary={summary} />

        <div className="mt-6">
          <BudgetPlanner />
        </div>
      </div>
    </>
  );
}

export default Budget;