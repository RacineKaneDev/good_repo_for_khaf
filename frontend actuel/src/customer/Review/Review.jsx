import React from 'react'
import ReviewCard from './ReviewCard'
import RatingCard from './RatingCard'
import {Divider} from '@mui/material'



const Review = () => {
  return (
    <div className='pt-10 flex flex-col lg:flex-row gap-20'>
  <section className='w-full md:w-1/2 lg:w-[40%] space-y-2'>
  <h1 className="font-semibold text-lg pb-4">
          Appreciations et Avis
      </h1>

     <RatingCard/>
  </section>
  <section className="w-full md:w-1/2 lg:w-[60%]">
  
      <div className='mt-10'>
          <div className="space-y-5">
              {[
                  { id: 1, author: "Moussa Diop", rating: 5, date: "Il y a 2 jours", text: "Excellent service ! J'ai obtenu mon financement en moins de 2 semaines. Merci Ndank Ndank." },
                  { id: 2, author: "Fatou Ndiaye", rating: 4.5, date: "Il y a 1 semaine", text: "Très bonne initiative pour les jeunes. L'accompagnement est réel." },
                  { id: 3, author: "Cheikh Fall", rating: 4, date: "Il y a 3 semaines", text: "Processus un peu long mais ça vaut le coup. Je recommande." },
                  { id: 4, author: "Awa Sy", rating: 5, date: "Il y a 1 mois", text: "Grâce à vous, j'ai pu ouvrir mon atelier de couture. Dieureudieuf !" },
                  { id: 5, author: "Modou Ndiaye", rating: 4, date: "Il y a 1 mois", text: "Une vraie solution pour l'emploi des jeunes." }
              ].map((item) => (
                  <div key={item.id} className='space-y-5'>
                      <ReviewCard item={item} />
                       <Divider />
                  </div>
              ))}
          </div>
      </div>



  </section>
</div>
  )
}

export default Review