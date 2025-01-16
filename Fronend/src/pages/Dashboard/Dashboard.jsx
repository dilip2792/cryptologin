import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import PriceSection from './components/PriceSection';
import InfoCard from './components/InfoCard';


const Dashboard = () => {
  return (
   
    <DashboardLayout title="Dashboard"  >
    <PortfolioSection/>
    <PriceSection/>
    <InfoCard/>
    </DashboardLayout>
   
  );
};

export default Dashboard;
