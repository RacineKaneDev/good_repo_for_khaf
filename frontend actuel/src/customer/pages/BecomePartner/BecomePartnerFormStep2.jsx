import React from "react";
import { Grid, TextField } from "@mui/material";

const BecomePartnerFormStep2 = ({ formik }) => {
  return (
    <div>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="salonAddress.phoneNumber"
            label="Mobile"
            value={formik.values?.salonAddress.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="salonAddress.pincode"
            label="Code Postal"
            value={formik.values?.salonAddress.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salonAddress?.pincode && Boolean(formik.errors.salonAddress?.pincode)}
            helperText={formik.touched.salonAddress?.pincode && formik.errors.salonAddress?.pincode}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="salonAddress.address"
            label="Adresse (Maison, Immeuble, Rue)"
            value={formik.values?.salonAddress.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salonAddress?.address && Boolean(formik.errors.salonAddress?.address)}
            helperText={formik.touched.salonAddress?.address && formik.errors.salonAddress?.address}
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="salonAddress.city"
            label="Ville"
            value={formik.values?.salonAddress.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salonAddress?.city && Boolean(formik.errors.salonAddress?.city)}
            helperText={formik.touched.salonAddress?.city && formik.errors.salonAddress?.city}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="salonAddress.email"
            label="Email de contact"
            value={formik.values?.salonAddress.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salonAddress?.email && Boolean(formik.errors.salonAddress?.email)}
            helperText={formik.touched.salonAddress?.email && formik.errors.salonAddress?.email}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BecomePartnerFormStep2;
