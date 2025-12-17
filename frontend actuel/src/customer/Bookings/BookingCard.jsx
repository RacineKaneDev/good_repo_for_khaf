import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';

const BookingCard = ({ booking }) => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Booking #{booking?.id}</h1>
        <p className="text-sm italic">Company ID: {booking?.companyId}</p>
        <div>
             {/* If we had opportunity details in booking we would list them. 
                 Booking entity usually has opportunityIds (Set<Long>). 
                 We can't easily display names without fetching. 
                 Displaying count or IDs. */}
            <p>Services: {booking?.opportunityIds?.length || 1} opportunité(s)</p>
        </div>
        <div>
          <p className="font-semibold flex items-center gap-1">
            Début <ArrowRightAltIcon /> {new Date(booking?.startTime).toLocaleString()}
          </p>
          <p className="text-slate-700">
             Fin: {new Date(booking?.endTime).toLocaleString()}
          </p>
           <p className={`font-semibold ${booking?.status === 'CANCELLED' ? 'text-red-500' : 'text-green-500'}`}>
            Status: {booking?.status}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        {/* Placeholder logo or company image if available */}
        <img className="h-28 w-28 object-cover rounded" src="https://atlanticmicrofinance.net/wp-content/uploads/2022/06/Logo_amifa_page-0001.jpg" alt="" />
        <p className="text-center font-bold">Total: {booking?.totalPrice} CFA</p>
        {booking?.status !== 'CANCELLED' && (
            <Button
            color="error"
            fullWidth
            variant="contained"
            >
            Annuler
            </Button>
        )}
      </div>
    </div>
  )
}

export default BookingCard