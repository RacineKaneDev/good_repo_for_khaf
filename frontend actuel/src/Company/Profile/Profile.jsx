import React from 'react'
import { Divider } from '@mui/material';
import ProfileFieldsCard from './ProfileFieldsCard';




const Profile = () => {
  return (
    <div className="lg:px-20 lg:pb-20 space-y-20">
      <div className="w-full lg:w-[70%]  ">

        <h1 className="text-5xl font-bold pb-5">Giz Senegal</h1>

        <div className="grid grid-cols-2 mb-20 gap-3">
          <div className="col-span-2">
            <img className="w-full rounded-md h-[15rem] object-cover" src="https://adepme.sn/wp-content/uploads/2020/04/Logoleiste-Senegal-scaled.jpg" alt="" />
          </div>
          <div className="col-span-1">
            <img className="w-full  rounded-md h-[15rem] object-cover" src="https://www.giz.de/sites/default/files/styles/dd_image/public/media/pkb-image/2025-07/gizimage-fortbildung-unternehmertum-rdax-782x521s.jpg?itok=Q8TZxZYU" alt="" />
          </div>
          <div className="col-span-1">
            <img className="w-full  rounded-md h-[15rem] object-cover" src="https://www.emploitogo.info/wp-content/uploads/2022/12/GIZ-recrutement.jpg" alt="" />
          </div>
        </div>

        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Company Admin Details
          </h1>
          <div>
            
          </div>
        </div>
        <div className="space-y-5">
         
          <div>
            <ProfileFieldsCard
              keys={"Company Admin Name"}
              value={"Moussa Diallo"}
            />
            <Divider />
            <ProfileFieldsCard
              keys={"Company Admin Email"}
              value={"moussa.diallo@giz.com"}
            />
            <Divider />
            <ProfileFieldsCard
              keys={"Role"}
              value={"COMPANY_ADMIN"}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Company Details
          </h1>
          {/* <div>
            <Button
              onClick={() => handleOpen("businessDetails")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              variant="contained"
              className="w-16 h-16"
            >
              <EditIcon />
            </Button>
          </div> */}
        </div>

        <div className=" ">
          <ProfileFieldsCard
            keys={"Company Name"}
            value={"Giz Senegal"}
          />
          <Divider />
          <ProfileFieldsCard
            keys={"Company Address"}
            value={"Dakar, RUE DE L'INDUSTRIE"}
          />
          <Divider />

          <ProfileFieldsCard
            keys={"Heure d'Ouverture"}
            value={"08:00"}
          />
            <Divider />

          <ProfileFieldsCard
            keys={"Heure de Fermeture"}
            value={"18:00"}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile