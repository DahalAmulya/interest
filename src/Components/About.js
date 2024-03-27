import React, { useState, useEffect } from "react";
import axios from "axios";

const Given = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");
  const [desc, setDesc] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState("");

  //for investment form

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    const postData = {
      date: date,
      amount: amount,
      name: name,
      remark: remark,
      interest: selectedInterest, 
    };

    axios
      .post("http://localhost:5000/api/transactions", postData)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);

        setDate("");
        setAmount("");
        setName("");
        setRemark("");
        setSelectedInterest(""); 
        console.log(postData);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const openPopup = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    setIsOpen(false);
    try {
      const postData = {
        name: name,
        address: address,
        interest: interest,
        desc: desc,
      };

      const response = await axios.post("http://localhost:5000/data", postData);

      console.log("Data posted successfully:", response.data);

      setAddress("");
      setName("");
      setInterest("");
      setDesc("");

      setOptions((prevOptions) => [...prevOptions, name]);
      console.log(postData);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get/data");
      setData(response.data);

      const names = response.data.map((item) => item.name);
      setOptions(names);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchInterest = async (selectedName) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/get/interest/${selectedName}`
      );
      setSelectedInterest(response.data.interest); 
    } catch (error) {
      console.error("Error fetching interest:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (name) {
      fetchInterest(name); 
    }
  }, [name]);

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Investment</h2>
        <form onSubmit={handleCalculate}>
          <div className="mb-4 relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <div className="flex items-center">
              <select
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
              >
                <option value="John">Please Select Name</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                className="ml-3 rounded-md bg-red-500 text-white px-3 py-2 focus:outline-none"
                onClick={openPopup}
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="remark"
              className="block text-sm font-medium text-gray-700 mb-1 "
            >
              Remark
            </label>
            <textarea
              id="remark"
              name="remark"
              rows="4"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Add New Customer
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interest
                </label>
                <input
                  type="test"
                  id="interest"
                  name="email"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>

              <div className="              mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  className="absolute top-0 right-0 m-4 text-red-500 text-6xl"
                  onClick={closePopup}
                >
                  &times;
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Given;
