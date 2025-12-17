import React from 'react'
import PreventionCard from './PreventionCard'



const Preventions = () => {
  return (
      <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold py-5">Mes Preventions</h1>
        </div>
        <div className="space-y-4 md:w-[35rem]">
          {[1,1,1].map((item) => (
            <PreventionCard/>
          ))}
        </div>
      </div>
    )
}

export default Preventions