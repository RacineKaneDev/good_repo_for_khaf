import React, { useEffect } from 'react'
import CompanyDetail from './CompanyDetail'
import { Button, Divider } from '@mui/material'
import { useState } from 'react'
import CompanyOpportunitiesDetails from './CompanyOpportunitiesDetails'
import Review from '../../Review/Review'
import CreateReviewForm from '../../Review/CreateReviewForm'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanyById } from '../../../Redux/Company/Action'
import { useParams } from 'react-router-dom'


const tabs = [{name: 'opportunitées de financement'}, {name: 'Avis'}, {name: 'Donner un avis'}]
const CompanyDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleActiveTab = (tab) => setActiveTab(tab);
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const { company } = useSelector(state => state.company);

  useEffect(() => {
    if (id) {
        dispatch(getCompanyById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="px-5 lg:px-20">
      <CompanyDetail company={company} />
      <div className="space-y-5">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <Button
              onClick={() => handleActiveTab(tab)}
              variant={tab.name === activeTab?.name ? "contained" : "outlined"}
            >
              {tab.name}
            </Button>
          ))}
        </div>
        <Divider />
      </div>
      <div>
          {activeTab?.name==="Donner un avis"?
          <div className="flex justify-center ">
           <CreateReviewForm companyId={id} />
          </div>:activeTab.name==="Avis"?<div>
            <Review />
          </div>:<CompanyOpportunitiesDetails companyId={id} />}
      </div>
    </div>
  )
}

export default CompanyDetails