import React from 'react'
import CompanyDrawerList from './components/CompanyDrawerList';
import Navbar from '../Company Admin/Navbar';
import CompanyRoutes from '../Routes/CompanyRoutes';








const CompanyDashboard = () => {
 return (
    <div className="min-h-screen">
      <Navbar DrawerList={CompanyDrawerList}/>
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <CompanyDrawerList />
        </div>
        <div className="p-10 w-full lg:w-[80%]  overflow-y-auto">
          <CompanyRoutes />
        </div>
      </section>
    </div>
  );
}

export default CompanyDashboard