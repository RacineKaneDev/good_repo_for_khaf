import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PreventionPage from '../Admin/pages/Prevention/PreventionPage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome Admin Dashboard</div>} />
      <Route path="/prevention" element={<PreventionPage />} />
    </Routes>
  );
};

export default AdminRoutes;
