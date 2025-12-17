import React from 'react'



const HomePage = () => {
  return (
   <div className="space-y-5">
     <div className=" lg:flex gap-5">
      <div className=" space-y-10 rounded-md w-full lg:w-[70%] ">
        <div>
          <div className="border rounded-lg p-5 w-full ">
            <h1 className="text-lg font-bold pb-5 text-[#067c06] ">
              Revenue Total:
            </h1>
          </div>
        </div>
      </div>
      <section className="space-y-5 w-full lg:w-[30%]">
        
          {/* <ReportCard
            icon={<AccountBalanceIcon />}
            value={"$" + "" + booking.report?.totalEarnings}
            title={"Total Earnings"}
          />
    
        
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={booking.report?.totalBookings}
            title={"Total Bookings"}
          />
    
        
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={"$" + booking.report?.totalRefund}
            title={"Total Refund"}
          />
    

        
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={booking.report?.cancelledBookings}
            title={"Cancel Bookings"}
          /> */}

      </section>
    </div>
    <div className=" space-y-10 rounded-md w-full ">
        <div>
          <div className="border rounded-lg p-5 w-full ">
            <h1 className="text-lg font-bold pb-5 text-[#067c06] ">
               Chart des réservations d'entretiens:
            </h1>
          </div>
        </div>
      </div>
   </div>
  );
}

export default HomePage