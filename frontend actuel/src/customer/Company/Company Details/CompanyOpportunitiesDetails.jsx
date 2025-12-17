import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import OpportunityCard from '../Company Details/OpportunityCard'
import SelectedOpportunitiesList from '../Company Details/SelectedOpportunitiesList'
import { Divider, Button } from '@mui/material'
import { ShoppingCart, RemoveShoppingCart } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyOpportunities } from '../../../Redux/Opportunity/Action';
import { createBooking } from '../../../Redux/Booking/Action';
import { useNavigate } from 'react-router-dom';


const CompanyOpportunitiesDetails = ({ companyId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { opportunities, isLoading } = useSelector(state => state.opportunity);
    const { user } = useSelector(state => state.auth);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if(companyId){
            dispatch(getCompanyOpportunities(companyId));
        }
    }, [dispatch, companyId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  const handleToggleCart = (opportunity) => {
      if(cart.find(item => item.id === opportunity.id)) {
          setCart(cart.filter(item => item.id !== opportunity.id));
      } else {
          setCart([...cart, opportunity]);
      }
  };

  const handleCreateBooking = () => {
      if(cart.length === 0) return;
      if(!user?.id) {
          alert("Veuillez vous connecter pour réserver.");
          return;
      }
      // Prepare Booking Request
      // Need startTime. For now, hardcoding or using current time + offset for demo?
      // Or prompt user? The BookingCard shows "Jour et Heures d'entretien".
      // Ideally a DatePicker. For simplicity in this task, I will use LocalDateTime.now().plusDays(1)
      const startTime = new Date();
      startTime.setDate(startTime.getDate() + 1); // Tomorrow
      
      const bookingData = {
          startTime: startTime.toISOString(),
          opportunityIds: cart.map(op => op.id),
          companyId: Number(companyId), // from props
          customerId: user.id
      };
      
      dispatch(createBooking(bookingData));
      alert("Réservation créée avec succès !");
      setCart([]);
      navigate('/bookings'); // Redirect to bookings
  };
  
  return (
    <div className='lg:flex gap-5 h-[90vh] mt-10'>
      <section className='pr-5 space-y-5 border-r lg:w[25%]'>
         {[].map((item,index) => (
           <CategoryCard key={index} handleCategoryClick={() => handleCategoryClick(index)} 
           selectedCategory={selectedCategory}
           item={index} 
           />
         ))}
      </section>
      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {opportunities?.map((item) => (
          <div key={item.id} className="space-y-4">
            <OpportunityCard 
                opportunity={item}
                onAdd={handleToggleCart}
                isAdded={!!cart.find(c => c.id === item.id)}
            />
            <Divider />
          </div>
        ))}
      </section>
      <section className="lg:w-[25%] ">
        <div className="border rounded-md p-5">
          {cart.length > 0 ? ( 
            <div className="">
              <div className="flex items-center gap-2">
                <ShoppingCart sx={{ fontSize: "30px", color: "green" }} />
                <h1 className="font-thin text-sm">Opportunités sélectionnées ({cart.length})</h1>
              </div>

               {/* Reuse SelectedOpportunitiesList or map here */}
               <div className="space-y-2 mt-4 max-h-[50vh] overflow-y-auto">
                   {cart.map(item => (
                       <div key={item.id} className="text-sm border-b pb-2">
                           <p className="font-semibold">{item.name}</p>
                           <p>{item.price} CFA</p>
                       </div>
                   ))}
               </div>

              <Button
                sx={{ py: ".7rem", mt: 2 }}
                fullWidth
                variant="contained"
                onClick={handleCreateBooking}
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