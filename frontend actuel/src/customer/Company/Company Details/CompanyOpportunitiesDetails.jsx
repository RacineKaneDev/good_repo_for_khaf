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
         {[
            { name: "All", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500" },
            { name: "Agriculture", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500" },
            { name: "Élevage", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500" },
            { name: "Pêche", image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?w=500" },
            { name: "Artisanat", image: "https://images.unsplash.com/photo-1606744881471-1f3d891f74b6?w=500" },
            { name: "Commerce", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500" }
         ].map((item,index) => (
           <CategoryCard key={index} handleCategoryClick={() => handleCategoryClick(index)} 
           selectedCategory={selectedCategory}
           item={item} 
           />
         ))}
      </section>
      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {[
          { id: 1, title: "Financement Boutique Cosmétique", price: "2.000.000", image: "https://images.unsplash.com/photo-1576426863848-c21f5fc67278?w=500", description: "Financement complet pour démarrage d'une boutique de cosmétiques à Dakar." },
          { id: 2, title: "Achat Pirogue Traditionnelle", price: "500.000", image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=500", description: "Acquisition d'une pirogue pour la pêche artisanale." },
          { id: 3, title: "Projet Aviculture Moderne", price: "1.500.000", image: "https://images.unsplash.com/photo-1516467508483-a721206156e3?w=500", description: "Installation d'un poulailler moderne de 500 têtes." },
          { id: 4, title: "Commerce de Tissus", price: "750.000", image: "https://images.unsplash.com/photo-1604514278489-35c1d686720f?w=500", description: "Stock de départ pour vente de tissus Wax et Bazin." },
          { id: 5, title: "Transformation de Fruits", price: "1.200.000", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=500", description: "Unité de transformation de mangues et jus locaux." }
        ].map((item) => (
          <div key={item.id} className="space-y-4">
            <OpportunityCard opportunity={item} />
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