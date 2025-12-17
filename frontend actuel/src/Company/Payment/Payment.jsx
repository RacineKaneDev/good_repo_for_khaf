import React from 'react'
import { Card, Divider, Button } from '@mui/material';





const Payment = () => {
  return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <Card className='col-span-1 p-5 rounded-md space-y-4'>
                    <h1 className='text-gray-600 font-medium'>Prix total gagné</h1>
                    <h1 className='font-bold text-xl pb-1'>50.000 fr CFA</h1>
                    <Divider />
                    <p className='text-gray-600 font-medium pt-1'>Dernier paiement : <strong>1000 fr CFA</strong></p>
                </Card>
                {/* <Card className='col-span-1 p-5 rounded-md space-y-4'>
                    <h1 className='text-gray-600 font-medium'>Payments To Be Settled</h1>
                    <h1 className='font-bold text-xl pb-1'>₹0</h1>
                    <Divider />
                    <p className='text-gray-600 font-medium pt-1'>Next Payment : <strong>₹0</strong></p>
                </Card> */}
            </div>
            <div className='mt-20'>

                <div className='flex gap-4'>
                    <Button  variant="contained">Transaction Table</Button>

                </div>
            </div>
        </div>
    )
}

export default Payment