import React from 'react'
import PreventionCard from './PreventionCard'



const Preventions = () => {
  return (
      <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold py-5">Mes Preventions</h1>
        </div>
        <div className="space-y-4 md:w-[35rem]">
          {[
            { id: 1, title: "Sensibilisation à Mbour (Quai de Pêche)", status: "EN COURS", date: "05 Jan 2025", description: "Campagne de sensibilisation sur les dangers de l'émigration irrégulière avec les pêcheurs.", image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?w=500" },
            { id: 2, title: "Causerie Educative à Saint-Louis", status: "TERMINÉ", date: "12 Dec 2024", description: "Discussion communautaire à Guet Ndar sur les opportunités de financement locales.", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500" },
            { id: 3, title: "Visite de Terrain à Thiaroye", status: "PLANIFIÉ", date: "20 Jan 2025", description: "Rencontre avec les jeunes porteurs de projets à Thiaroye Azur.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500" }
          ].map((item) => (
            <PreventionCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
    )
}

export default Preventions