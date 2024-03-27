import React, { useState } from "react";
import axios from "axios";

const Customer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");
  const [desc, setDesc] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Customer </h2>
        <form onSubmit={handlePost}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
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
              Interest Calculated Annually
            </label>
            <input
              type="text"
              id="interest"
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-red-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-700 mb-1 "
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="4"
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
    </div>
  );
};

export default Customer;
