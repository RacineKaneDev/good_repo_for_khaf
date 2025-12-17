import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PreventionHome from '../customer/Prevention/PreventionHome';
import CompanyDetails from '../customer/Prevention/NdankNdank/CompanyDetails';
import Preventions from '../customer/Prevention/MesPreventions/Preventions';
import PreventionNotifications from '../customer/Prevention/Notifications/PreventionNotifications';
import { NotFound } from '../customer/Not Found/NotFound';
import PreventionNavbar from '../customer/Prevention/Navbar/PreventionNavbar';


const CustomerPreventionRoutes = () => {
  return (
    <>
    <PreventionNavbar />

<div className='pb-20 min-h-[90vh] mt-[5rem]'>
  <Routes>
    <Route path='/' element={<PreventionHome/>}/>
    <Route path='/NdankNdank' element={<CompanyDetails/>}/>
    <Route path='/MesPreventions' element={<Preventions/>}/>
    <Route path='/notifications' element={<PreventionNotifications/>}/>
    <Route path='*' element={<NotFound />} />
  </Routes>
  
</div> 

    </>
  )
}

export default CustomerPreventionRoutes