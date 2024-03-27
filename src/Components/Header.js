import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-lg font-bold">Interest Calculator</h1>
        </div>

        <nav className="flex justify-center space-x-4">
          <Link to="customer" className="text-gray-300 hover:text-white">
            Customer
          </Link>
          <Link to="given" className="text-gray-300 hover:text-white">
            Investment
          </Link>
          <Link to="taken" className="text-gray-300 hover:text-white">
            Return
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            to="user"
            className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Show Customer
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
