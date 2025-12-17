import React from 'react'

const CompanyDetail = () => {
  return (
   <div className="space-y-5 mb-20">
    <section className="grid grid-cols-2  gap-3">
      <div className="col-span-2">
        <img
          className="w-full rounded-md h-[20rem] object-cover"
          src="https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[20rem] object-cover"
          src="https://www.giz.de/sites/default/files/styles/dd_image/public/media/pkb-image/2025-07/gizimage-fortbildung-unternehmertum-rdax-782x521s.jpg?itok=Q8TZxZYU"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[20rem] object-cover"
          src="https://www.emploitogo.info/wp-content/uploads/2022/12/GIZ-recrutement.jpg"
          alt=""
        />
      </div>
    </section>


      <div className="space-y-3">
        <h1 className="font-bold text-3xl">Giz Senegal </h1>
        <p>
          123 Rue de l'Industrie, Dakar
        </p>
        <p>
          <strong>Ouvert :</strong> De 9h  à 19h
        </p>
      </div>
  
   </div>
  )
}

export default CompanyDetail