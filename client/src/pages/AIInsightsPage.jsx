import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import AIInsights from "../components/AIInsights";

function AIInsightsPage() {
  const [summary, setSummary] =
    useState({});

  const [transactions,
    setTransactions] =
    useState([]);

  const fetchData = async () => {
    try {
      const summaryRes =
        await API.get(
          "/transactions/summary"
        );

      const transactionRes =
        await API.get(
          "/transactions"
        );

      setSummary(summaryRes.data);

      setTransactions(
        transactionRes.data
      );
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
          AI Financial Insights
        </h1>

        <AIInsights
          summary={summary}
          transactions={transactions}
        />

      </div>
    </>
  );
}

export default AIInsightsPage;