import React from 'react'
import { Card } from '@mui/material'


const NotificationCard = () => {
  return (
    <Card
      sx={{ bgcolor: "#EAF0F1" }}
      className={`cursor-pointer p-5 flex items-center gap-5 
      }`}
    >
      🛎️
      <div>
        <p>votre reservation d'entretien a été confirmée</p>
        <h1 className="space-x-3">
          <h1 className='font-semibold'>Liste des opportunités sélectionnées:</h1>
          {[1, 1, 1, 1].map((item) => (
            <span> Terrain agricole</span>
          ))}
        </h1>
      </div>
    </Card>
  )
}

export default NotificationCard
