import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const CompanyCard = () => {
  const navigate = useNavigate();
  return (
     <div onClick={() => navigate("/company/2")} className='cursor-pointer'>
      <div className="w-56 md:w-80 rounded-md bg-slate-100 ">
        <img
          className="w-full h-[15rem] object-cover rounded-t-md"
          src= "https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg"
          alt=""
        />
        <div className="p-5 space-y-2">
          <h1 className="font-bold text-xl">GIZ Senegal</h1>
          <div>
            <div className=" text-white text-sm p-1 bg-green-700 rounded-full w-14 flex items-center justify-center gap-1">
              4.5
              <StarIcon sx={{ fontSize: "16px" }} />
            </div>
          </div>
          <p>
            Nous sommes une organisation de coopération internationale pour le
            développement durable. Nous sommes pret à vous accompagner dans vos
            projets.
             
          </p>
          <p>Rue de l'Industrie, Dakar</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard