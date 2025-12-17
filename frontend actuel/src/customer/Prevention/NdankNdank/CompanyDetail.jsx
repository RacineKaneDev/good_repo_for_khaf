import React from 'react'


const CompanyDetail = () => {
  return (
   <div className="space-y-5 mb-20">
    <section className="grid grid-cols-2  gap-3">
      <div className="col-span-2">
        <img
          className="w-full rounded-md h-[20rem] object-cover"
          src="https://static.wixstatic.com/media/e5c368_45eb7d61808f4643b9f80f9357e710a4~mv2.png/v1/fit/w_2500,h_1330,al_c/e5c368_45eb7d61808f4643b9f80f9357e710a4~mv2.png"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[20rem] object-cover"
          src="https://mybusinessmag.info/wp-content/uploads/2020/12/FormationPro.jpg"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[20rem] object-cover"
          src="https://s.rfi.fr/media/display/88266148-0a73-11ec-94de-005056a97e36/w:1280/p:4x3/formation-afrique-de-sud.jpg"
          alt=""
        />
      </div>
    </section>


      <div className="space-y-3">
        <h1 className="font-bold text-3xl">NdankNdank </h1>
        <p>
          Plateau, Dakar
        </p>
        <p>
          <strong>Ouvert :</strong> De 8h  à 20h
        </p>
      </div>
  
   </div>
  )
}

export default CompanyDetail