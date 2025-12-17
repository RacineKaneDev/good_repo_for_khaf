import React from 'react'
import CompanyCard from './CompanyCard'

const CompanyList = () => {
  return (
    <div className='flex flex-wrap gap-5'>
        {[1,2,3,4,5,6].map((item)=> <CompanyCard key={item} />)}
    </div>
  )
}

export default CompanyList