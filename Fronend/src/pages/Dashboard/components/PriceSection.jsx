import React from 'react'
import graph from '../../../../public/graph.svg'
import { FaPlus, FaMinus, FaDollarSign, FaBitcoin } from 'react-icons/fa';
import GradientChart from './GradientChart';
import Transactions from './Transactions';

const PriceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Current Price Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-600 text-sm font-medium">Current Price</span>
            <h2 className="text-2xl font-bold">₹26,670.25</h2>
            <span className="text-green-500 text-sm font-medium">↗ 0.04%</span>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">
              <FaPlus className="mr-2" /> Buy
            </button>
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">
              <FaMinus className="mr-2" /> Sell
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <button className="text-gray-500 bg-gray-200 px-3 py-1 rounded-full">1H</button>
          <button className="text-white bg-purple-600 px-3 py-1 rounded-full">1D</button>
          <button className="text-gray-500 bg-gray-200 px-3 py-1 rounded-full">1W</button>
          <button className="text-gray-500 bg-gray-200 px-3 py-1 rounded-full">1M</button>
          
        </div>
        
        <div className="mt-4">
          {/* Placeholder for Chart */}
          
          
            <GradientChart/>
          
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <Transactions/>
      </div>
    </div>
  )
}

export default PriceSection