import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { FiDownload } from "react-icons/fi";
import { useState } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import TransactionTable from './components/TransactionTable';

const tabs = [
  { id: 1, label: "Tab 1", content: "Content for Tab 1", number: 341 },
  { id: 2, label: "Tab 2", content: "Content for Tab 2", number: 341 },
  { id: 3, label: "Tab 3", content: "Content for Tab 3", number: 341 },
];

const Transaction = () => {

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <DashboardLayout title="Transaction">
      <div className='m-8'>
        <div className='flex justify-end mb-2  '>
          <button className='bg-purple-600 text-white p-2 flex items-center justify-center mt-6 rounded-md'>
            <FiDownload className='mr-2' />
            Export CSV
          </button>
        </div>


        <div>
          {/* Tab Navigation */}
          <div className='flex md:justify-between flex-col'>
          <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "10px 20px",
                  borderBottom: activeTab === tab.id ? "2px solid blue" : "none",
                  cursor: "pointer",
                }}
              >
                {tab.label}<span className='bg-slate-300 rounded-md px-2'>{tab.number}</span>
              </button>
            ))}
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
          </div>
          {/* Tab Content */}
          <div style={{ padding: "20px", marginTop: "10px", border: "1px solid #ccc" }}>
            {tabs.find((tab) => tab.id === activeTab)?.content}
            <TransactionTable />
          </div>
        </div>


      </div>

    </DashboardLayout>
  )
}

export default Transaction