import React from "react";
import { Grid, TextField, Box } from "@mui/material";

const Step3_Address = ({ formik }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="address"
            label="Adresse Complète (Rue, Numéro...)"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        
        <Grid item xs={6}>
            <TextField
                fullWidth
                name="city"
                label="Ville"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
            />
        </Grid>

        <Grid item xs={6}>
            <TextField
                fullWidth
                name="phoneNumber"
                label="Téléphone"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
        </Grid>

        <Grid item xs={12}>
            <TextField
                fullWidth
                name="email"
                label="Email de l'Entreprise"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Step3_Address;
