import React from 'react'
import { IconButton } from '@mui/material'
import Close from '@mui/icons-material/Close';


const SelectedOpportunitiesList = () => {
  return (
     <div className="space-y-2 my-5">
      {[1,1,1,1,1].map((item) => (
        <div className="py-2 px-4 rounded-md bg-slate-100 flex justify-between items-center">
          <h1 className="font-thin">Terrain Agricole</h1>
          <p>1000fr cfa</p>
          <IconButton>
            <Close />
          </IconButton>
        </div>
      ))}
    </div>
  )
}

export default SelectedOpportunitiesList