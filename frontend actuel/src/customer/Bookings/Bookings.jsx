import React, { useEffect } from 'react'
import BookingCard from './BookingCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBookings } from '../../Redux/Booking/Action';

const Bookings = () => {
  const dispatch = useDispatch();
  const { bookings, isLoading } = useSelector(state => state.booking);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    // Assuming user is loaded in Auth state. If not, we might need to rely on JWT or ensure user is loaded.
    // Ideally we should get User info on app load.
    // For now, if we have a user in state, use it.
    if(user?.id) {
        dispatch(getUserBookings(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold py-5">Mes Réservations d'entretien</h1>
      </div>
      <div className="space-y-4 md:w-[35rem]">
      {bookings.length > 0 ? (
          bookings.map((item) => (
             <BookingCard key={item.id} booking={item}/>
          ))
        ) : (
          <p>Aucune réservation trouvée.</p>
        )}
      </div>
    </div>
  )
}

export default Bookings