import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import PartnerForm from "./PartnerForm";

const BecomePartner = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <div className="grid md:gap-10 grid-cols-1 md:grid-cols-3 min-h-screen px-5 py-5">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md flex flex-col items-center justify-center bg-white">
        <PartnerForm /> 
      </section>
      <section className="hidden md:col-span-1 md:flex lg:col-span-2 justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="border rounded-md space-y-2 font-bold text-center p-5 bg-white shadow-sm">
            <p className="text-2xl">Rejoignez la Révolution</p>
            <p className="text-lg text-teal-500">Boostez vos ventes aujourd'hui</p>
          </div>
          {/* <img className="w-full rounded-md shadow-md" src="/seller.jpg" alt="Partner" /> */}
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
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          OTP envoyé à votre email!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BecomePartner;
