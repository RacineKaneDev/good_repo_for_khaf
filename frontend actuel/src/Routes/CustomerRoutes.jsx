import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../customer/Financement/Home';
import Prevention from '../customer/Prevention/PreventionHome';
import CompanyDetails from '../customer/Company/Company Details/CompanyDetails';
import Bookings from '../customer/Bookings/Bookings';
import Notifications from '../customer/Notifications/Notifications';
import { NotFound } from '../customer/Not Found/NotFound';
import Navbar from  '../customer/Navbar/Navbar';



const CustomerRoutes = () => {
  return (
    <>
    <Navbar />

<div className='pb-20 min-h-[90vh] mt-[5rem]'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/financement' element={<Home/>}/>
    <Route path='/company/:id' element={<CompanyDetails/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path='/notifications' element={<Notifications/>}/>
    <Route path='*' element={<NotFound />} />
  </Routes>
  
</div> 

    </>
  )
}

export default CustomerRoutes