import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; // Icons for Deposit and Withdraw

const PortfolioSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start p-4 bg-white shadow-md rounded-lg m-4 space-y-4 md:space-y-0">
      {/* Total Portfolio Value */}
      <div className="flex flex-col text-center md:text-left">
        <span className="text-gray-600 text-sm font-medium flex items-center justify-center md:justify-start">
          Total Portfolio Value
          <span className="ml-1 text-gray-400">ⓘ</span> {/* Info icon */}
        </span>
        <span className="text-2xl font-bold">₹ 112,312.24</span>
      </div>

      {/* Wallet Balances */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col text-center lg:text-left">
          <span className="text-gray-600 text-sm font-medium">Wallet Balances</span>
          <span className="text-lg font-bold">
            22.39401000 <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-lg">BTC</span>
          </span>
        </div>
        <div className="flex flex-col text-center md:text-left">
        <span className="text-gray-600 text-sm font-medium"></span>
          <span className="text-lg font-bold"> 
           
            ₹ 1,300.00 <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-lg">INR</span>
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <button className="flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 w-full md:w-auto">
          <FaArrowDown className="mr-2" /> Deposit
        </button>
        <button className="flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 w-full md:w-auto">
          <FaArrowUp className="mr-2" /> Withdraw
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
