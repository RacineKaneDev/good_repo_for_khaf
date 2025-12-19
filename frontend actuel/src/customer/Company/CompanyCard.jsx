import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();
  return (
     <div onClick={() => navigate(`/company/${company.id}`)} className='cursor-pointer'>
      <div className="w-56 md:w-80 rounded-md bg-slate-100 ">
        <img
          className="w-full h-[15rem] object-cover rounded-t-md"
          src={company.image}
          alt={company.name}
        />
        <div className="p-5 space-y-2">
          <h1 className="font-bold text-xl">{company.name}</h1>
          <div>
            <div className=" text-white text-sm p-1 bg-green-700 rounded-full w-14 flex items-center justify-center gap-1">
              4.5
              <StarIcon sx={{ fontSize: "16px" }} />
            </div>
          </div>
          <p>
            {company.description}
          </p>
          <p>{company.address}</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard