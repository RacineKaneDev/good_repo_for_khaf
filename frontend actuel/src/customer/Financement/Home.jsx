import React from 'react'
import Banner from './Banner'
import HomeServiceCard from './HomeServiceCard'
import { services } from '../../Data/Services'
import CompanyList from '../Company/CompanyList'

const Home = () => {
  return (
    <div className='space-y-20'>
        <section>
            <Banner />
        </section>
        <section className="space-y-10 lg:space-y-0 lg:flex items-center gap-5 px-20">
          <div className='w-full lg:w-1/2'>
            <h1 className='text-2xl font-semibold pb-9'>
              Dans quel domaine avez-vous besoin d'un coup de pouce financier ?
             <h4 className='text-sm text-gray-600'>(Pour debut de projet, projet existant, équipement, etc...)</h4> 
             <h4 className='text-sm text-gray-600'>voici quelques suggestions...</h4>
            </h1>
            <div className=' flex flex-wrap justify-center items-center gap-5'>
              {
                services.map((item)=> <HomeServiceCard key={item.id} item={item} />)
              }
            </div>
          </div>
         <div className="w-full lg:w-1/2 border grid gap-3 grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh] ">
          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://webdoc.france24.com/lodyssee-pecheurs-senegalais/img/chap5/2253.jpg"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://www.investirauburkina.net/images/articles/elevage-de-poulets-en-afrique-1.png"
              alt=""
            />
          </div>
          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://www.fao.org/media/images/faoinsenegallibraries/default-album/wfd-2.jpg?sfvrsn=f363e54a_1"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://lequotidien.sn/wp-content/uploads/2019/12/keur-design.jpg"
              alt=""
            />
          </div>
         </div>
        </section>
        <section className="px-20">
        <h1 className="text-3xl font-bold pb-10 ">Réservez un entretien de financement auprès de nos partenaires</h1>
        <CompanyList />
      </section>
        {/* Home Page */}
    </div>
  )
}

export default Home