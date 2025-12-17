import React from 'react'
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const PreventionCard = () => {
 return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">NdankNdank</h1>
        <div>
            <li>Zone de Prevention: Mbour petite côte</li>
            <li>Type de Prevention: Potentiel départ</li>
            
        </div>
        <div>
          <p className="font-semibold">
            Date de Prévention <ArrowRightAltIcon /> 05-04-2025
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <img className="h-28 w-28" src="https://static.wixstatic.com/media/e5c368_45eb7d61808f4643b9f80f9357e710a4~mv2.png/v1/fit/w_2500,h_1330,al_c/e5c368_45eb7d61808f4643b9f80f9357e710a4~mv2.png" alt="" />
        <p className="text-center">Potentiel Récompense: 5000fr CFA</p>
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

export default PreventionCard