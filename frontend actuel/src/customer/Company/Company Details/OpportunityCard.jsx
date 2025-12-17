import React from 'react'
import { Button } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OpportunityCard = ({ opportunity, onAdd, isAdded }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <div className="space-y-1 w-[60%]">
          <h1 className="text-2xl font-semibold">{opportunity?.name}</h1>
          <p className="text-gray-500 text-sm">{opportunity?.description}</p>
          <div className="flex items-center gap-3">
             <p>Montant: {opportunity?.amount || 0} Fr CFA </p>
            <div className="flex items-center gap-2">
                <p>Frais d'entretien: {opportunity?.price} Fr CFA </p>
                <FiberManualRecordIcon sx={{ fontSize: "10px", color: "gray" }} />
                <p>Durée entretien: {opportunity?.interviewDuration} mins</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 ">
          <img
            className="w-32 h-32 object-cover rounded-md"
            src={opportunity?.image || "https://www.shutterstock.com/image-photo/colorful-farmland-landscape-lush-green-600nw-2669916459.jpg"} 
            alt={opportunity?.name}
          />
          <Button
            fullWidth
            variant={isAdded ? "contained" : "outlined"}
            onClick={() => onAdd(opportunity)}
          >
            {isAdded ? "Retirer" : "Ajouter"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OpportunityCard