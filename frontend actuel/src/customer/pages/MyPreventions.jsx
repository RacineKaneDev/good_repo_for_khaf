import React from 'react';
import { Paper, Typography, Button, Grid, Chip, LinearProgress } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const MyPreventions = () => {
  const preventions = [
    {
      id: 1,
      title: "Vaccination Annuelle - Campagne Santé",
      date: "Prochaine dose: 15 Jan 2026",
      status: "Actif",
      progress: 75,
      image: "https://images.unsplash.com/photo-1632057929452-9b2a6d85o5e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Programme de vaccination contre la grippe saisonnière et autres maladies endémiques."
    },
    {
      id: 2,
      title: "Audit Sécurité Incendie - Bureau",
      date: "Réalisé le: 10 Nov 2025",
      status: "Conforme",
      progress: 100,
      image: "https://images.unsplash.com/photo-1599690925056-99c5c285906c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Vérification complète des systèmes de détection et d'extinction d'incendie."
    },
    {
      id: 3,
      title: "Formation Premiers Secours",
      date: "Session: 05 Fev 2026",
      status: "Inscrit",
      progress: 20,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Formation certifiante pour les employés sur les gestes de premiers secours."
    }
  ];

  return (
    <div className='px-5 lg:px-20 pt-10'>
      <h1 className='text-3xl font-bold text-center mb-10 text-gray-800'>Mes Préventions</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {preventions.map((item) => (
          <Paper key={item.id} elevation={3} className='rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col'>
             <img 
                src={item.image} 
                alt={item.title} 
                className='w-full h-48 object-cover'
            />
            <div className='p-6 flex-1 flex flex-col justify-between space-y-4'>
                <div>
                     <div className='flex justify-between items-start mb-2'>
                        <Typography variant="h6" className='font-bold text-gray-900 leading-tight'>{item.title}</Typography>
                        <Chip 
                            icon={item.progress === 100 ? <VerifiedUserIcon /> : <HealthAndSafetyIcon />} 
                            label={item.status} 
                            color={item.progress === 100 ? "success" : "primary"} 
                            size="small" 
                            variant="outlined"
                        />
                    </div>
                    <Typography variant="body2" color="text.secondary" className='mb-3'>
                        {item.description}
                    </Typography>
                     <Typography variant="subtitle2" className='font-medium text-teal-700'>
                        {item.date}
                    </Typography>
                </div>

                <div className='space-y-2'>
                    <div className='flex justify-between text-xs text-gray-500'>
                        <span>Progression</span>
                        <span>{item.progress}%</span>
                    </div>
                    <LinearProgress variant="determinate" value={item.progress} color="success" className='rounded-full h-2' />
                    <Button variant="contained" fullWidth sx={{mt: 2, bgcolor: "#0f766e"}}>
                        Gérer
                    </Button>
                </div>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default MyPreventions;
