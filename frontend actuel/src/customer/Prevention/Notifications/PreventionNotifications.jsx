import React, { useEffect } from 'react'
import PreventionNotificationCard from './PreventionNotificationCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUserNotifications } from '../../../Redux/Notification/Action';


const PreventionNotifications = () => {
    const dispatch = useDispatch();
    const { notification } = useSelector(store => store);

    useEffect(() => {
        dispatch(getUserNotifications());
    }, [dispatch]);

  return (
     <div className="flex justify-center  px-5 md:px-20 py-5 md:py-10">
        <div className="space-y-5 w-full lg:w-1/2 ">
        <h1 className="text-2xl font-bold text-center">Notifications</h1>
          {notification.notifications.map((item) => (
            <PreventionNotificationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
}

export default PreventionNotifications