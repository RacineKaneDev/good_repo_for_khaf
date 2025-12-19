import React from 'react'

const NotificationCard = ({ item }) => {
  return (
    <div className='p-5 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex items-start gap-4'>
        <img 
            src={item?.image || "https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg"} 
            alt="" 
            className='w-16 h-16 rounded-full object-cover border-2 border-primary-color'
        />
        <div className='space-y-1 flex-1'>
            <div className='flex justify-between items-start'>
                <p className='font-bold text-lg'>{item?.role || "GIZ Admin"}</p>
                <span className='text-xs text-gray-500 font-medium'>{item?.time || "Maintenant"}</span>
            </div>
             <p className='text-gray-600 leading-relaxed text-sm'>
                {item?.message || "Votre demande de financement a été mise à jour. Veuillez vérifier votre tableau de bord pour plus de détails."}
            </p>
        </div>
    </div>
  )
}

export default NotificationCard

