import Navbar from "../components/Navbar";
import PDFExport from "../components/PDFExport";
import CSVExport from "../components/CSVExport";
import { useEffect, useState } from "react";
import API from "../services/api";

function Reports() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const summaryRes = await API.get(
        "/transactions/summary"
      );

      const transactionRes = await API.get(
        "/transactions"
      );

      setSummary(summaryRes.data);
      setTransactions(transactionRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Sidebar width compensation */}
      <div className="ml-[256px] min-h-screen bg-gray-100 p-10">

        <h1 className="text-4xl font-bold mb-10">
          Reports
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

          {/* PDF Report */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="text-6xl mb-4">
              📄
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Download PDF Report
            </h2>

            <p className="text-gray-500 mb-6">
              Get your complete financial
              report in PDF format.
            </p>

            <PDFExport
              transactions={transactions}
              summary={summary}
            />

          </div>

          {/* CSV Report */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="text-6xl mb-4">
              📊
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Export CSV Report
            </h2>

            <p className="text-gray-500 mb-6">
              Export your transaction
              data in CSV format.
            </p>

            <CSVExport
              transactions={transactions}
            />

          </div>

        </div>

      </div>
    </>
  );
}

export default Reports;