import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

import SalonForm from "./SalonForm";

const BecomePartner = () => {

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen ">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md flex flex-col items-center justify-center ">
        <SalonForm /> 
       
      </section>
      <section className=" hidden md:col-span-1 md:flex  lg:col-span-2  justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="borderr rounded-md space-y-2 font-bold text-center">
            <p className=" text-2xl">Rejoignez la révolution du marché</p>
            <p className="text-lg text-teal-500"> Boostez vos ventes aujourd'hui</p>
          </div>

          <img className="" src={"https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} alt="" />
        </div>
      </section>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={true ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {" otp sent to your email!"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BecomePartner;
