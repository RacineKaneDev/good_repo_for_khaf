import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Box,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../../../Redux/Company/action";
import Step1_Owner from "./Step1_Owner";
import Step2_Details from "./Step2_Details";
import Step3_Address from "./Step3_Address";

const steps = ["Propriétaire", "Détails Entreprise", "Adresse & Contact"];

const PartnerForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth, company } = useSelector((store) => store);
  const isAuthenticated = auth.user != null;

  const handleStep = (value) => {
    if (value === 1 && activeStep === 0 && !isAuthenticated) {
        // Prevent moving forward if not authenticated
        navigate("/login");
        return;
    }
    setActiveStep(activeStep + value);
  };

  const getLocalTime = (time) => {
    if (!time) return null;
    let hour = time?.$H;
    let minute = time?.$m;
    let second = time?.$s || 0;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      openTime: null,
      closeTime: null,
      images: [],
      address: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: (values) => {
      const companyData = {
        name: values.name,
        images: values.images,
        address: values.address,
        city: values.city,
        phoneNumber: values.phoneNumber,
        email: values.email, // Company email
        openTime: getLocalTime(values.openTime),
        closeTime: getLocalTime(values.closeTime),
      };

      console.log("Submitting Company Data:", companyData);
      dispatch(createCompany(companyData)); 
      // ideally we wait for success to navigate.
      // For now we can navigate to dashboard or home
      // navigate("/company-dashboard"); // Assuming there is a dashboard
    },
  });
  
  // Watch for successful creation to navigate
  // This requires the Redux state to hold success status or created company
  // For simplicity in this iteration, we might just assume success or wait a bit.
  // A better approach is to check `company.createdCompany` changes.
  useEffect(() => {
     if(company.createdCompany) {
         navigate("/company-dashboard");
     }
  }, [company.createdCompany, navigate]);


  return (
    <div className="w-full">
      <Typography variant="h4" className="text-center pb-5 font-bold text-teal-600">
          Devenir Partenaire
      </Typography>
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <div className="mt-10 space-y-10 min-h-[400px]">
        <div>
          {activeStep === 0 ? (
            <Step1_Owner formik={formik} />
          ) : activeStep === 1 ? (
            <Step2_Details formik={formik} />
          ) : (
            <Step3_Address formik={formik} />
          )}
        </div>

        <div className="flex items-center justify-between pt-5">
            {activeStep > 0 ? (
                <Button
                    onClick={() => handleStep(-1)}
                    variant="outlined"
                    color="inherit"
                >
                    Retour
                </Button>
            ) : (
                <div></div> // Spacer
            )}
            
          <Button
            disabled={activeStep === 0 && !isAuthenticated}
            onClick={
              activeStep === steps.length - 1
                ? () => formik.handleSubmit()
                : () => handleStep(1)
            }
            variant="contained"
            color="primary"
            sx={{ minWidth: "120px" }}
          >
            {activeStep === steps.length - 1 ? (
              formik.isSubmitting ? (
                <CircularProgress
                  size="small"
                  sx={{ width: "24px", height: "24px", color: "white" }}
                />
              ) : (
                "Valider"
              )
            ) : (
              "Continuer"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
