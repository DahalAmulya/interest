import React from "react";

const SignUp = () => {
  // Dummy data
  const data = [
    {
      name: "John Doe",
      address: "123 Main St",
      amount: 1000,
      interest: 5,
      total: 1050,
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      amount: 2000,
      interest: 6,
      total: 2120,
    },
    {
      name: "Bob Johnson",
      address: "789 Oak St",
      amount: 1500,
      interest: 4,
      total: 1560,
    },
    {
      name: "Alice Williams",
      address: "321 Pine St",
      amount: 3000,
      interest: 7,
      total: 3210,
    },
    {
      name: "Tom Brown",
      address: "654 Cedar St",
      amount: 2500,
      interest: 5.5,
      total: 2637.5,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Customers Table</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Interest</th>
            <th className="px-4 py-2">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.address}</td>
              <td className="border px-4 py-2">{item.amount}</td>
              <td className="border px-4 py-2">{item.interest}%</td>
              <td className="border px-4 py-2">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignUp;
