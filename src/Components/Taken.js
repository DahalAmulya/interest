import React, { useState, useEffect } from "react";
import axios from "axios";

const Taken = () => {
  const [selectedName, setSelectedName] = useState("");
  const [data, setData] = useState([]);
  const [transactions, setTransactions] = useState({});

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    return `${year}-${month}-${day}`;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/transactions/${selectedName}`
      );
      setTransactions(response.data);
      console.log(transactions);
    } catch (error) {
      console.error("Error fetching transaction data:", error);
    }
  };

  useEffect(() => {
    if (selectedName) {
      setTransactions({});
      fetchTransactions();
    }
  }, [selectedName]);

  const options = data.map((item, index) => (
    <option key={index} value={item.name}>
      {item.name}
    </option>
  ));

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full h-[70vh]">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Total Transaction
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <select
              id="name"
              name="name"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option value="">Please Select Name</option>
              {options}
            </select>
          </div>
          {selectedName && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date
                </label>
                <span>{getTodayDate()}</span>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Amount
                </label>
                <span>{transactions[0]?.amount}</span>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interest Amount
                </label>
                <span>{transactions[0]?.interest}</span>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="totalAmount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Total Amount
                </label>
                <span> {transactions[0]?.totalAmount}</span>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="totalAmount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Remark
                </label>
                <span>{transactions[0]?.remark}</span>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Taken;
