import React, { use, useState } from 'react'
import CategoryCard from './CategoryCard'
import OpportunityCard from '../Company Details/OpportunityCard'
import SelectedOpportunitiesList from '../Company Details/SelectedOpportunitiesList'
import { Divider, Button } from '@mui/material'
import { ShoppingCart, RemoveShoppingCart } from '@mui/icons-material'

const CompanyOpportunitiesDetails = () => {


  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className='lg:flex gap-5 h-[90vh] mt-10'>
      <section className='pr-5 space-y-5 border-r lg:w[25%]'>
         {[1, 2, 3, 4, 5].map((item,index) => (
           <CategoryCard key={index} handleCategoryClick={() => handleCategoryClick(index)} 
           selectedCategory={selectedCategory}
           item={index} 
           />
         ))}
      </section>
      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {[1,1,1,1,1,1,1,1,1].map((item) => (
          <div key={item} className="space-y-4">
            <OpportunityCard
            />
            <Divider />
          </div>
        ))}
      </section>
      <section className="lg:w-[25%] ">
        <div className="border rounded-md p-5">
          {true ? (
            <div className="">
              <div className="flex items-center gap-2">
                <ShoppingCart sx={{ fontSize: "30px", color: "green" }} />
                <h1 className="font-thin text-sm">Opportunités sélectionnées</h1>
              </div>

              <SelectedOpportunitiesList
              />

              <Button
                sx={{ py: ".7rem" }}
                fullWidth
                variant="contained"
              >
                Reservez maintenant
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 items-center justify-center">
              <RemoveShoppingCart sx={{ fontSize: "30px", color: "green" }} />
              <h1>Aucune opportunité sélectionnée</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CompanyOpportunitiesDetails