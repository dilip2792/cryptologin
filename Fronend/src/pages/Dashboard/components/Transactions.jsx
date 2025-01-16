import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa6";

const Transactions = () => {
    const transactions=[
        {
            id:1,
            icon:<FaRupeeSign />,
            text:"INR Deposit",
            amount:"+ ₹81,123.10",
            timestamp:"2022-06-09 7:06 PM",
        },
        {
            id:2,
            icon:<FaBtc />,
            text:"BTC Sell",
            amount:"- 12.48513391 BTC",
            timestamp:"2022-05-27 12:32 PM",
        },
        {
            id:3,
            icon:<FaRupeeSign />,
            text:"INR Deposit",
            amount:"+ ₹81,123.10",
            timestamp:"2022-06-09 7:06 PM",
        },
    ]
  return (
    <div>
        <h2>Recent Transactions</h2>
        {transactions.map((transaction) => (
        <div key={transaction.id} className="flex justify-between p-4 border-b">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">{transaction.icon}</div>
            <div>
              <h3 className="text-lg font-medium">{transaction.text}</h3>
              <p className="text-sm text-gray-500">{transaction.timestamp}</p>
            </div>
          </div>
          <div className={`text-lg font-bold ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {transaction.amount}
          </div>
        </div>
      ))}
      <button className='w-full bg-gray-400 mt-6 py-2 rounded-md font-bold'>View All</button>
    </div>
  )
}

export default Transactions