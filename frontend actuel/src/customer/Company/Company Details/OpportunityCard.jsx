import React from 'react'
import { Button } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OpportunityCard = () => {
  return (
    <div className="w-full">
      {/* <h1 className='pb-5 text-3xl font-bold'>Hair Cutting and Beard</h1> */}
      <div className="flex items-center justify-between gap-5">
        <div className="space-y-1 w-[60%]">
          <h1 className="text-2xl font-semibold">Terrain Agricole</h1>
          <p className="text-gray-500 text-sm">Nous mettrons à votre dispositiion 500.000 Fr CFA pour L'obtention de votre propre champs!</p>
          <div className="flex items-center gap-3">
            <p>Frais d'entretien: 1000 Fr CFA </p>
            <FiberManualRecordIcon sx={{ fontSize: "10px", color: "gray" }} />
            <p>Durée entretien: 30 mins</p>
          </div>
        </div>
        <div className="space-y-3 ">
          <img
            className="w-32 h-32 object-cover rounded-md"
            src="https://www.shutterstock.com/image-photo/colorful-farmland-landscape-lush-green-600nw-2669916459.jpg"
            alt=""
          />
          <Button
            fullWidth
            variant="outlined"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OpportunityCard