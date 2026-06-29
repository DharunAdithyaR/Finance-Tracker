import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import RecentActivity from "../components/RecentActivity";
import BudgetAlert from "../components/BudgetAlert";

function Dashboard() {
const [summary, setSummary] = useState({});
const [transactions, setTransactions] = useState([]);

const [darkMode, setDarkMode] = useState(
localStorage.getItem("theme") === "dark"
);

useEffect(() => {
if (darkMode) {
document.documentElement.classList.add("dark");
localStorage.setItem("theme", "dark");
} else {
document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");
}
}, [darkMode]);

const fetchData = async () => {
try {
const summaryRes = await API.get("/transactions/summary");
const transactionRes = await API.get("/transactions");


  setSummary(summaryRes.data);
  setTransactions(transactionRes.data);
} catch (error) {
  console.error(error);
}


};

useEffect(() => {
fetchData();
}, []);

return (
<> <Navbar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
     showProfile={true}
     showDashboard={false}
   />

  <div className="ml-64 min-h-screen p-6 bg-gray-100">

    <SummaryCards summary={summary} />

    <div className="my-6">
      <BudgetAlert summary={summary} />
    </div>

    <div className="my-6">
      <RecentActivity
        transactions={transactions}
      />
    </div>

  </div>
</>

);
}

export default Dashboard;
