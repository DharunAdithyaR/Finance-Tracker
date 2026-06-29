import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Transactions() {
  const [transactions, setTransactions] =
    useState([]);

  const [editingTransaction,
    setEditingTransaction] =
    useState(null);

  const fetchData = async () => {
    try {
      const res = await API.get(
        "/transactions"
      );

      setTransactions(res.data);

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

      <div className="ml-[275px] min-h-screen p-6 bg-gray-100">

        <h1 className="text-4xl font-bold mb-8">
          Transactions
        </h1>

        {/* Add Transaction Form */}
        <div className="mb-8">
          <TransactionForm
            refreshData={fetchData}
            editingTransaction={
              editingTransaction
            }
            clearEdit={() =>
              setEditingTransaction(null)
            }
          />
        </div>

        {/* Transaction History */}
        <TransactionList
          transactions={transactions}
          refreshData={fetchData}
          onEdit={
            setEditingTransaction
          }
        />

      </div>
    </>
  );
}

export default Transactions;