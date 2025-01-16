import React from "react";
import { RiDashboardHorizontalFill, RiExchangeFundsLine, RiCustomerService2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { id: "Dashboard", link: "/", label: "Dashboard", icon: <RiDashboardHorizontalFill size={20} /> },
    { id: "Transaction", link: "/transaction", label: "Transactions", icon: <RiExchangeFundsLine size={20} /> },
  ];

  const supportItem = { id: "Support", link: "/support", label: "Support", icon: <RiCustomerService2Line size={20} /> };

  const isActiveLink = (link) => location.pathname === link;

  return (
    <div className="flex flex-col h-screen justify-between shadow-lg bg-white">
      {/* Main Navigation */}
      <nav className="mt-10">
        <ul className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-bold text-gray-800">@DO SOME CODING</h1>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-lg cursor-pointer ${
                  isActiveLink(item.link) ? "bg-slate-400 text-white" : "hover:bg-slate-200 text-gray-800"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Support Navigation */}
      <nav className="mb-10">
        <ul className="flex flex-col">
          <li>
            <Link
              to={supportItem.link}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-lg cursor-pointer ${
                isActiveLink(supportItem.link) ? "bg-slate-400 text-white" : "hover:bg-slate-200 text-gray-800"
              }`}
            >
              {supportItem.icon}
              <span>{supportItem.label}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
