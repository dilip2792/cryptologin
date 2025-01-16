import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const DashboardLayout = ({ title, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex ">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/5">
        <Sidebar />
      </div>

      {/* Drawer for small screens */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex">
          <div className="w-64 h-full bg-white shadow-lg">
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-4 text-xl text-black"
            >
              ✖
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow bg-gray-100" >
        {/* Top Navigation */}
        <TopNav title={title} className=""  >
          {/* Drawer toggle button for small screens */}
          <button
            className="md:hidden text-2xl px-4 py-2"
            onClick={toggleDrawer}
          >
            ☰
          </button>
        </TopNav>
        <div
  className="max-w-[70rem]  overflow-x-hidden overflow-y-auto scrollbar-hide"
  style={{ height: 'calc (100vh - 16vh)' }}
>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
