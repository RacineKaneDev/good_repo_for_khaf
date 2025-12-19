import React from 'react'
import NotificationCard from './NotificationCard'


const Notifications = () => {
  const notifications = [
    {
      id: 1,
      image: "https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg",
      message: "Votre demande de financement auprès de GIZ Senegal a été approuvée pour la phase initiale.",
      role: "GIZ Admin",
      time: "Il y a 2 heures"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2SjF_iY-k_B3wT-xRkF8kC_J8_0-123456",
      message: "Caurie Micro Finance a ajouté une nouvelle opportunité de micro-crédit pour les femmes entrepreneures.",
      role: "Système",
      time: "Hier"
    },
    {
      id: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ecobank_Logo.svg/1200px-Ecobank_Logo.svg.png",
      message: "Rappel : Votre rendez-vous avec Ecobank est prévu pour demain à 09:00.",
      role: "Ecobank",
      time: "Il y a 2 jours"
    },
    {
       id: 4,
       image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
       message: "Nouvelle formation technique disponible : Gestion de trésorerie.",
       role: "Formation",
       time: "Il y a 3 jours"
    }
  ];

  return (
   <div className="flex justify-center  px-5 md:px-20 py-5 md:py-10">
      <div className="space-y-5 w-full lg:w-1/2 ">
      <h1 className="text-2xl font-bold text-center">Notifications</h1>
        {notifications.map((item) => (
          <NotificationCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}
    
export default Notifications