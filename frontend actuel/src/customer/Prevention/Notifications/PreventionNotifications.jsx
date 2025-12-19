import React from 'react'
import PreventionNotificationCard from './PreventionNotificationCard';


const PreventionNotifications = () => {
  return (
     <div className="flex justify-center  px-5 md:px-20 py-5 md:py-10">
        <div className="space-y-5 w-full lg:w-1/2 ">
        <h1 className="text-2xl font-bold text-center">Notifications</h1>
          {[
            { id: 1, title: "Prévention Réussie !", message: "Votre campagne de sensibilisation à Mbour a touché plus de 50 jeunes.", timestamp: "Il y a 2 heures" },
            { id: 2, title: "Nouveau Financement Disponible", message: "Le programme 'Tekki Fii' a lancé un nouvel appel à projets.", timestamp: "Il y a 1 jour" },
            { id: 3, title: "Rappel Entretien", message: "Votre entretien pour le projet 'Boutique Cosmétique' est demain à 10h.", timestamp: "Il y a 2 jours" }
          ].map((item) => (
            <PreventionNotificationCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
    )
}

export default PreventionNotifications