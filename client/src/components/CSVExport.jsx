import { saveAs } from "file-saver";

function CSVExport({ transactions }) {

  const exportCSV = () => {

    const headers = [
      "Title",
      "Amount",
      "Type",
      "Category",
      "Date",
    ];

    const rows =
      transactions.map((t) => [
        t.title,
        t.amount,
        t.type,
        t.category,
        new Date(
          t.createdAt
        ).toLocaleDateString(),
      ]);

    const csvContent =
      [headers, ...rows]
        .map((row) =>
          row.join(",")
        )
        .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type:
          "text/csv;charset=utf-8;",
      }
    );

    saveAs(
      blob,
      "transactions.csv"
    );
  };

  return (
    <button
      onClick={exportCSV}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}

export default CSVExport;