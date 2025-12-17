import React from 'react'
import { IconButton } from '@mui/material'
import Close from '@mui/icons-material/Close';


const SelectedOpportunitiesList = ({ cart, handleToggleCart }) => {
  return (
     <div className="space-y-2 my-5">
      {cart.map((item) => (
        <div key={item.id} className="py-2 px-4 rounded-md bg-slate-100 flex justify-between items-center">
          <h1 className="font-thin">{item.title || item.name}</h1>
          <p>{item.amount || item.price} fr CFA</p>
          <IconButton onClick={() => handleToggleCart(item)}>
            <Close />
          </IconButton>
        </div>
      ))}
    </div>
  )
}

export default SelectedOpportunitiesList