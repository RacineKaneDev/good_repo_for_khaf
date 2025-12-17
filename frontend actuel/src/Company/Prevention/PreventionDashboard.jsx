import React from 'react'




const PreventionDashboard = () => {
  return (
   <div className="space-y-5">
     <div className=" lg:flex gap-5">
      <div className=" space-y-10 rounded-md w-full lg:w-[70%] ">
        <div>
          <div className="border rounded-lg p-5 w-full ">
            <h1 className="text-lg font-bold pb-5 text-[#067c06] ">
              Nombre de departs stoppés : 63
            </h1>
          </div>
        </div>
      </div>
      <div className=" space-y-10 rounded-md w-full lg:w-[70%] ">
        <div>
          <div className="border rounded-lg p-5 w-full ">
            <h1 className="text-lg font-bold pb-5 text-[#7c0606] ">
              Nombre de departs non stoppés : 25
            </h1>
          </div>
        </div>
      </div>
      <div className=" space-y-10 rounded-md w-full lg:w-[70%] ">
        <div>
          <div className="border rounded-lg p-5 w-full ">
            <h1 className="text-lg font-bold pb-5 text-[#10067c] ">
              Intervention en cours : 7
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
               Chart des Preventions:
            </h1>
          </div>
        </div>
      </div>
   </div>
  );
}

export default PreventionDashboard