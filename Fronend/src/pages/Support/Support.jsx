import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import SupportFooter from './components/SupportFooter'

const Support = () => {
  return (
    <DashboardLayout title="Support">
        <SupportCard/>
        <SupportFooter/>
    </DashboardLayout>
  )
}
export default Support