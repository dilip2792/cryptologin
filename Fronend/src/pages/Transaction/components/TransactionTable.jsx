import React from "react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2025-01-25",
      time: "11:22 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "Pending",
    },
    {
      id: "HD82NA2G",
      date: "2025-01-25",
      time: "11:22 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "Processing",
    },
    {
      id: "HD82NA2I",
      date: "2025-01-25",
      time: "11:22 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "Cancelled",
    },
    {
      id: "HD82NA2J",
      date: "2025-01-25",
      time: "11:22 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "Completed",
    },
    {
      id: "HD82NA2K",
      date: "2025-01-25",
      time: "11:22 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "Completed",
    },
    {
      id: "HD82NA2L",
      date: "2025-01-25",
      time: "11:22 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "bg-gray-400 text-white",
    Processing: "bg-yellow-400 text-white",
    Completed: "bg-green-600 text-white",
    Cancelled: "bg-red-600 text-white",
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">Id</th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Date and Time
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">Type</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Amount</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm font-semibold">{data.id}</td>
              <td className="px-4 py-2 text-sm">
                {data.date}
                <br />
                <span className="text-gray-500">{data.time}</span>
              </td>
              <td className="px-4 py-2 text-sm">
                {data.type.name}
                <br />
                <span className="text-gray-500">{data.type?.tag}</span>
              </td>
              <td className="px-4 py-2 text-sm font-semibold">{data.amount}</td>
              <td
                className={`px-4 py-1 rounded text-sm font-bold ${
                  statusColor[data.status]
                }`}
              >
                {data.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
