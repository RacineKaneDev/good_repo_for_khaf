import React from 'react';
import { Paper, Typography, Button, Grid, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MyReservations = () => {
  const reservations = [
    {
      id: 1,
      title: "Consultation Financement - GIZ",
      date: "20 Dec 2025",
      time: "10:00 - 11:00",
      location: "Bureau GIZ, Dakar",
      status: "Confirmé",
      image: "https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg",
      statusColor: "success"
    },
    {
      id: 2,
      title: "Suivi Projet - Caurie",
      date: "22 Dec 2025",
      time: "14:30 - 15:30",
      location: "Thiès Agence Principal",
      status: "En attente",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2SjF_iY-k_B3wT-xRkF8kC_J8_0-123456",
      statusColor: "warning"
    },
    {
      id: 3,
      title: "Ouverture Compte Pro - Ecobank",
      date: "25 Dec 2025",
      time: "09:00 - 09:45",
      location: "Agence Cheikh Anta Diop",
      status: "Terminé",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ecobank_Logo.svg/1200px-Ecobank_Logo.svg.png",
      statusColor: "default"
    }
  ];

  return (
    <div className='px-5 lg:px-20 pt-10'>
      <h1 className='text-3xl font-bold text-center mb-10 text-gray-800'>Mes Réservations</h1>
      
      <div className='space-y-6'>
        {reservations.map((booking) => (
          <Paper key={booking.id} elevation={3} className='p-5 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300'>
             <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={3}>
                    <img 
                        src={booking.image} 
                        alt={booking.title} 
                        className='w-full h-40 object-cover rounded-lg'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-3'>
                             <Typography variant="h5" className='font-bold text-gray-800'>{booking.title}</Typography>
                             <Chip label={booking.status} color={booking.statusColor} size="small" />
                        </div>
                       
                        <div className='flex items-center gap-2 text-gray-600'>
                            <CalendarMonthIcon className='text-teal-600' />
                            <span>{booking.date}</span>
                        </div>
                         <div className='flex items-center gap-2 text-gray-600'>
                            <AccessTimeIcon className='text-teal-600' />
                            <span>{booking.time}</span>
                        </div>
                         <div className='flex items-center gap-2 text-gray-600'>
                            <LocationOnIcon className='text-teal-600' />
                            <span>{booking.location}</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} className='flex flex-col gap-3 justify-center'>
                    <Button variant="contained" color="primary" fullWidth sx={{bgcolor: "#0f766e"}}>Voir Détails</Button>
                    <Button variant="outlined" color="error" fullWidth>Annuler</Button>
                </Grid>
             </Grid>
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default MyReservations;
