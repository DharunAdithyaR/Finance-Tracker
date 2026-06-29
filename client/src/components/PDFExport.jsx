import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PDFExport({ transactions, summary }) {

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Finance Tracker Report", 14, 20);

    doc.setFontSize(12);
    doc.text(
      `Balance: ₹${summary.balance || 0}`,
      14,
      35
    );

    doc.text(
      `Income: ₹${summary.totalIncome || 0}`,
      14,
      45
    );

    doc.text(
      `Expense: ₹${summary.totalExpense || 0}`,
      14,
      55
    );

    autoTable(doc, {
      startY: 70,
      head: [
        [
          "Title",
          "Amount",
          "Type",
          "Category",
        ],
      ],
      body: transactions.map((item) => [
        item.title,
        item.amount,
        item.type,
        item.category,
      ]),
    });

    doc.save("Finance_Report.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Download Report
    </button>
  );
}

export default PDFExport;