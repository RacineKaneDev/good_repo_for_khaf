import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../customer/Financement/Home';
import Prevention from '../customer/Prevention/PreventionHome';
import CompanyDetails from '../customer/Company/Company Details/CompanyDetails';
import Bookings from '../customer/Bookings/Bookings';
import Notifications from '../customer/Notifications/Notifications';
import { NotFound } from '../customer/Not Found/NotFound';
import Navbar from  '../customer/Navbar/Navbar';
import BecomePartner from '../customer/pages/BecomePartner/BecomePartner';
import MyReservations from '../customer/pages/MyReservations';
import MyPreventions from '../customer/pages/MyPreventions';
import Login from '../customer/Auth/Login';
import Signup from '../customer/Auth/Signup';


const CustomerRoutes = () => {
  return (
    <>
    <Navbar />

<div className='pb-20 min-h-[90vh] mt-[5rem]'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/financement' element={<Home/>}/>
    <Route path='/prevention' element={<Prevention/>}/>
    <Route path='/company/:id' element={<CompanyDetails/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path='/my-bookings' element={<MyReservations/>}/>
    <Route path='/my-preventions' element={<MyPreventions/>}/>
    <Route path='/become-partner' element={<BecomePartner/>}/>
    <Route path='/notifications' element={<Notifications/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<NotFound />} />
  </Routes>
  
</div> 

    </>
  )
}

export default CustomerRoutes