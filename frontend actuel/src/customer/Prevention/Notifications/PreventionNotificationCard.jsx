import React from 'react'
import { Card } from '@mui/material';


const PreventionNotificationCard = () => {
  return (
    <Card
      sx={{ bgcolor: "#EAF0F1" }}
      className={`cursor-pointer p-5 flex items-center gap-5 
      }`}
    >
      🛎️
      <div>
        <p>votre Prévention a été un succès!</p>
        <h1 className="space-x-3">
          <h1 className='font-semibold'>Les migrants ont été stoppés à temps</h1>
        </h1>
        <p className='text-sm text-gray-500'><strong>Passez dans les locaux de NdankNdank pour recevoir votre récompense de : 5000 FCFA</strong></p>
      </div>
    </Card>
  )
}

export default PreventionNotificationCard