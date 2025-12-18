import React from 'react'
import { Card } from '@mui/material';


const PreventionNotificationCard = ({ item }) => {
  return (
    <Card
      sx={{ bgcolor: "#EAF0F1" }}
      className={`cursor-pointer p-5 flex items-center gap-5 
      }`}
    >
      🛎️
      <div>
        <p>{item.title || item.type || "Nouvelle Notification"}</p>
        <h1 className="space-x-3">
          <h1 className='font-semibold'>{item.message || item.description || "Vous avez une nouvelle notification."}</h1>
        </h1>
        <p className='text-sm text-gray-500'><strong>{item.timestamp || ""}</strong></p>
      </div>
    </Card>
  )
}

export default PreventionNotificationCard