import React, { useEffect } from 'react'
import CompanyCard from './CompanyCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompanies } from '../../Redux/Company/Action';

const CompanyList = () => {
  const dispatch = useDispatch();
  const { companies, isLoading } = useSelector(state => state.company);

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  return (
    <div className='flex flex-wrap gap-5 justify-center'>
        {companies?.slice(0, 6).map((item) => (
            <CompanyCard key={item.id} company={item} />
        ))}
    </div>
  )
}

export default CompanyList