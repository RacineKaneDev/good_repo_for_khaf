import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';


const BookingCard = () => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Atlantique microfinances</h1>
        <div>
            <li>financement atelier couture</li>
            <li>financement projet agricole</li>
            <li>financement boutique cosmetique</li>
        </div>
        <div>
          <p className="font-semibold">
            Jour et Heures d'entretien <ArrowRightAltIcon /> 05-04-2025
          </p>
          <p className="text-slate-700">
            10:00 à 11:45
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <img className="h-28 w-28" src="https://atlanticmicrofinance.net/wp-content/uploads/2022/06/Logo_amifa_page-0001.jpg" alt="" />
        <p className="text-center">Frais total: 3000fr CFA</p>
        <Button
          color="error"
          fullWidth
          variant="contained"
        >
          Annuler
        </Button>
      </div>
    </div>
  )
}

export default BookingCard