import React from 'react'

const CompanyDetail = ({ company }) => {
  return (
   <div className="space-y-5 mb-20">
    <section className="grid grid-cols-2  gap-3">
      <div className="col-span-2">
        <img
          className="w-full rounded-md h-[20rem] object-cover"
          src={company?.images?.[0] || "https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg"}
          alt=""
        />
      </div>
      {/* Additional images if available */}
      {company?.images?.slice(1,3).map((img, i) => (
          <div className="col-span-1" key={i}>
            <img className="w-full rounded-md h-[20rem] object-cover" src={img} alt="" />
          </div>
      ))}
    </section>


      <div className="space-y-3">
        <h1 className="font-bold text-3xl">{company?.name}</h1>
        <p>
          {company?.address}
        </p>
        <p>
          <strong>Ouvert :</strong> {company?.openingHours} {/* Assuming field */}
        </p>
        <p>{company?.description}</p>
      </div>
  
   </div>
  )
}

export default CompanyDetail