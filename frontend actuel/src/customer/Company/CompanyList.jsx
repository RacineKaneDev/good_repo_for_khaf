import React from 'react'
import CompanyCard from './CompanyCard'

const CompanyList = () => {
  const companies = [
    {
      id: 1,
      name: "GIZ Senegal",
      image: "https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg",
      description: "Nous sommes une organisation de coopération internationale pour le développement durable. Nous sommes pret à vous accompagner dans vos projets.",
      address: "Rue de l'Industrie, Dakar"
    },
    {
      id: 2,
      name: "Caurie Micro Finance",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2SjF_iY-k_B3wT-xRkF8kC_J8_0-123456", // Placeholder or generic image
      description: "Institution de microfinance offrant des services financiers adaptés aux besoins des populations défavorisées.",
      address: "Thiès, Sénégal"
    },
    {
      id: 3,
      name: "Ecobank",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ecobank_Logo.svg/1200px-Ecobank_Logo.svg.png",
      description: "La banque panafricaine. Des solutions bancaires pour les particuliers et les entreprises.",
      address: "Km 5, Avenue Cheikh Anta Diop, Dakar"
    }
  ];

  return (
    <div className='flex flex-wrap gap-5'>
        {companies.map((company)=> <CompanyCard key={company.id} company={company} />)}
    </div>
  )
}

export default CompanyList