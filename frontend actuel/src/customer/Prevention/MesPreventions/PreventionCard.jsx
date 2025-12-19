import React from 'react'
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const PreventionCard = ({ item }) => {
 return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{item?.title}</h1>
        <div>
            <li>Zone de Prevention: {item?.title?.split(" à ")[1] || "Mbour"}</li>
            <li>Statut: {item?.status}</li>
            <li>{item?.description}</li>
        </div>
        <div>
          <p className="font-semibold">
            Date de Prévention <ArrowRightAltIcon /> {item?.date}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <img className="h-28 w-28 object-cover rounded-md" src={item?.image} alt="" />
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