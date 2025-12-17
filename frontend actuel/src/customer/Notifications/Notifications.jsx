import React, { useEffect } from 'react'
import NotificationCard from './NotificationCard'
import { useDispatch, useSelector } from 'react-redux';
import { getUserNotifications } from '../../Redux/Notification/Action';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, isLoading } = useSelector(state => state.notification);
  // Assuming auth loaded or token present. 
  // Ideally rely on user state but can just call action which uses token.
  
  useEffect(() => {
    dispatch(getUserNotifications());
  }, [dispatch]);

  return (
   <div className="flex justify-center  px-5 md:px-20 py-5 md:py-10">
      <div className="space-y-5 w-full lg:w-1/2 ">
      <h1 className="text-2xl font-bold text-center">Notifications</h1>
        {notifications?.length > 0 ? (
            notifications.map((item) => (
            <NotificationCard key={item.id} notification={item}/>
            ))
        ) : (
            <p className="text-center">Aucune notification.</p>
        )}
      </div>
    </div>
  )
}
    
export default Notifications