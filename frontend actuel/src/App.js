import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import greenTheme from './theme/greenTheme';
import { Button } from '@mui/material';
import Home from './customer/Financement/Home';
import CompanyDetails from './customer/Company/Company Details/CompanyDetails';
import Bookings from './customer/Bookings/Bookings';
import Notifications from './customer/Notifications/Notifications';
import Navbar from './customer/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './customer/Not Found/NotFound';
import CompanyDashboard from './Company/CompanyDashboard.jsx';
import CustomerRoutes from './Routes/CustomerRoutes.jsx';
import CustomerPreventionRoutes from './Routes/CustomerPreventionRoutes.jsx';
import AdminDashboard from './Admin/AdminDashboard';
import { useSelector, useDispatch } from 'react-redux';
import useNotificationWebsoket from './util/useNotificationWebsoket';
import { getUser } from './Redux/Auth/action';
import { useEffect } from 'react';





function App() {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  useNotificationWebsoket(auth.user?.id, 'user');

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      dispatch(getUser(localStorage.getItem("jwt")));
    }
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={greenTheme}>

      {/* <Home /> */}
      {/* <CompanyDetails /> */}
      {/* <Bookings /> */}
      {/* <Notifications /> */}

      <Routes>
        <Route path="/company-dashboard/*" element={<CompanyDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path='*' element={<CustomerRoutes />} />
        <Route path="/prevention/*" element={<CustomerPreventionRoutes />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
