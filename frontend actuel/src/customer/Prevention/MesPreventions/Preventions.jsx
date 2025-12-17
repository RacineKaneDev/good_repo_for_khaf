import React, { useEffect } from 'react'
import PreventionCard from './PreventionCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPreventions } from '../../../Redux/Prevention/Action';

const Preventions = () => {
  const dispatch = useDispatch();
  const { prevention } = useSelector(store => store);

  useEffect(() => {
    dispatch(getAllPreventions());
  }, [dispatch]);

  return (
      <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold py-5">Mes Preventions</h1>
        </div>
        <div className="space-y-4 md:w-[35rem]">
          {prevention.preventions.map((item) => (
            <PreventionCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
    )
}

export default Preventions