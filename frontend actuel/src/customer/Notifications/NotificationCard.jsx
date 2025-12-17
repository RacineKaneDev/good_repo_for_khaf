import React from 'react'
import { Card } from '@mui/material'

const NotificationCard = ({ notification }) => {
  return (
    <Card
      sx={{ bgcolor: "#EAF0F1" }}
      className={`cursor-pointer p-5 flex items-center gap-5`}
    >
      🛎️
      <div>
        <h1 className="font-bold uppercase text-sm">{notification?.type}</h1>
        <p>{notification?.description}</p>
        <p className="text-xs text-gray-500">{new Date(notification?.createdAt).toLocaleString()}</p>
      </div>
    </Card>
  )
}

export default NotificationCard
