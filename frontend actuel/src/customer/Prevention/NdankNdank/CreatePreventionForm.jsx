import React from 'react'
import { useFormik } from 'formik';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const CreatePreventionForm = () => {
  const formik = useFormik({
    initialValues: {
      userId: "",
      fullName: "",
      email: "",
      address: "",
      age: "",
      zonePrevention: "",
      datePrevention: new Date().toISOString().substring(0, 10), // date auto
      typePrevention: "",
      observation: "",
    },
    onSubmit: (values) => {
      console.log("Prevention Form Submitted:", values);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "white",
      }}
      className="space-y-6 w-full lg:w-1/2"
    >
      <h1 className="text-2xl font-bold mb-4">Créer une Prévention</h1>

      {/* fullName */}
      <TextField
        fullWidth
        id="fullName"
        name="fullName"
        label="Nom complet"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        required
      />

      {/* email */}
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        required
      />

      {/* address */}
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Adresse"
        value={formik.values.address}
        onChange={formik.handleChange}
        required
      />

      {/* age */}
      <TextField
        fullWidth
        id="age"
        name="age"
        label="Âge"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
      />

      {/* zonePrevention */}
      <TextField
        fullWidth
        id="zonePrevention"
        name="zonePrevention"
        label="Zone de Prévention"
        placeholder="Ex: Mbour, Thiaroye, St-Louis…"
        value={formik.values.zonePrevention}
        onChange={formik.handleChange}
        required
      />

      {/* datePrevention — auto et non modifiable */}
      <TextField
        fullWidth
        id="datePrevention"
        name="datePrevention"
        label="Date de Prévention"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.datePrevention}
        disabled
      />

      {/* typePrevention */}
      <FormControl fullWidth>
        <InputLabel id="typePrevention-label">Type de Prévention</InputLabel>
        <Select
          labelId="typePrevention-label"
          id="typePrevention"
          name="typePrevention"
          label="Type de Prévention"
          value={formik.values.typePrevention}
          onChange={formik.handleChange}
        >
          <MenuItem value="campagne">Campagne</MenuItem>
          <MenuItem value="visite">Visite</MenuItem>
          <MenuItem value="sensibilisation">Sensibilisation</MenuItem>
        </Select>
      </FormControl>

      {/* observation */}
      <TextField
        fullWidth
        id="observation"
        name="observation"
        label="Observation"
        multiline
        rows={4}
        value={formik.values.observation}
        onChange={formik.handleChange}
        required
      />

      <Button color="primary" variant="contained" type="submit" fullWidth sx={{ py: 1.5 }}>
        Soumettre la Prévention
      </Button>
    </Box>
  );
}

export default CreatePreventionForm