import React from 'react'
import NotificationCard from './NotificationCard'


const Notifications = () => {
  return (
   <div className="flex justify-center  px-5 md:px-20 py-5 md:py-10">
      <div className="space-y-5 w-full lg:w-1/2 ">
      <h1 className="text-2xl font-bold text-center">Notifications</h1>
        {[1,1,1,1].map((item) => (
          <NotificationCard/>
        ))}
      </div>
    </div>
  )
}
    
export default Notifications