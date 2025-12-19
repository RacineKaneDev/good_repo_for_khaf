import React from 'react'
import { IconButton } from '@mui/material'
import Close from '@mui/icons-material/Close';


const SelectedOpportunitiesList = () => {
  return (
     <div className="space-y-2 my-5">
      {[
        { id: 1, title: "Terrain Agricole", price: "1.000.000" },
        { id: 2, title: "Financement Pirogue", price: "500.000" }
      ].map((item) => (
        <div key={item.id} className="py-2 px-4 rounded-md bg-slate-100 flex justify-between items-center">
          <h1 className="font-thin">{item.title}</h1>
          <p>{item.price} fr CFA</p>
          <IconButton>
            <Close />
          </IconButton>
        </div>
      ))}
    </div>
  )
}

export default SelectedOpportunitiesList