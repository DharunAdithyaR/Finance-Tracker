import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import FinanceChart from "../components/FinanceChart";

function Analytics() {
const [summary, setSummary] = useState({});

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const res = await API.get(
"/transactions/summary"
);


setSummary(res.data);


};

return (
<> <Navbar />


  <div className="ml-64 min-h-screen p-6 bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">
      Analytics
    </h1>

    <FinanceChart summary={summary} />
  </div>
</>

);
}

export default Analytics;
