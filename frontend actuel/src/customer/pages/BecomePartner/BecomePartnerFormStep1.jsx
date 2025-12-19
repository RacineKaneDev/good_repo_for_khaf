import React from "react";
import { Box, TextField } from "@mui/material";

const BecomePartnerFormStep1 = ({ formik }) => {
  
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-9">Détails du Propriétaire</p>

      <div className="space-y-9">
        <TextField
          fullWidth
          name="fullName"
          label="Nom complet"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          name="password"
          label="Mot de passe"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
    </Box>
  );
};

export default BecomePartnerFormStep1;
