import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Company/Home/HomePage'
import OpportunityTable from '../Company/Opportunity/OpportunityTable'
import CreateOpportunityForm from '../Company/Opportunity/CreateOpportunityForm'
import BookingTable from '../Company/Booking/BookingTable'
import Profile from '../Company/Profile/Profile'
import Category from '../Company/Category/Category'
import Payment from '../Company/Payment/Payment'
import TransactionTable from '../Company/Transaction/TransactionTable'
import Notifications from '../customer/Notifications/Notifications'
import PreventionDashboard from '../Company/Prevention/PreventionDashboard'
import PreventionTable from '../Company/Prevention/PreventionTable'
import PreventionNotifications from '../customer/Prevention/Notifications/PreventionNotifications'


const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/preventionDashboard" element={<PreventionDashboard />} />
      <Route path="/preventions" element={<PreventionTable />} />
      <Route path="/opportunities" element={<OpportunityTable />} />
      <Route path="/add-opportunity" element={<CreateOpportunityForm />} />

      <Route path="/bookings" element={<BookingTable />} />

      <Route path="/account" element={<Profile />} />

      <Route path="/category" element={<Category />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/transactions" element={<TransactionTable />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/PreventionNotifications" element={<PreventionNotifications />} />

    </Routes>
  );
}

export default CompanyRoutes