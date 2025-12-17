import { Create } from '@mui/icons-material';
import React from 'react'
import CreatePreventionForm from './CreatePreventionForm';
import { useState } from 'react';
import { Button, Divider } from '@mui/material';
import CompanyDetail from './CompanyDetail';
import Review from './Review/Review';
import CreateReviewForm from './Review/CreateReviewForm';


const tabs = [{name: 'Créer une prevention'}, {name: 'Avis'}, {name: 'Donner un avis'}]
const CompanyDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleActiveTab = (tab) => setActiveTab(tab);

  return (
    <div className="px-5 lg:px-20">
      <CompanyDetail />
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
           <CreateReviewForm />
          </div>:activeTab.name==="Avis"?<div>
            <Review />
          </div>:<CreatePreventionForm />}
      </div>
    </div>
  )
}

export default CompanyDetails