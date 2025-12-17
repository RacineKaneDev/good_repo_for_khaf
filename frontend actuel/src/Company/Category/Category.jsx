import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import CategoryTable from './CategoryTable';
import CategoryForm from './CategoryForm';



const Category = () => {
  const [activeTab, setActiveTab] = useState(1);

   const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex items-center gap-5">
        <Button
          onClick={() => handleTabChange(1)}
          variant={activeTab == 1 ? "contained" : "outlined"}
        >
          Toutes les Catégories
        </Button>
        <Button
          onClick={() => handleTabChange(2)}
          variant={activeTab == 2 ? "contained" : "outlined"}
        >
          Creer une Catégorie
        </Button>
      </div>
      <div className="mt-10">
        {activeTab === 1 ? <CategoryTable /> : <CategoryForm />}
      </div>
    </div>
  );
}

export default Category