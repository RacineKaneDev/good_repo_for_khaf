import React from 'react'
import { useFormik } from 'formik';
import { Grid, TextField, Button, IconButton, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from 'react';



const CreateOpportunityForm = () => {
  const [uploadImage, setUploadImage] = useState(null);

   const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      interviewDuration: "",
     
      image: "",
      category: "",
   
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
      
    <div className="flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 p-4 w-full lg:w-1/2"
      >
         <h1 className="pb-5 font-bold text-xl">Ajouter une nouvelle opportunitée</h1>
        <Grid container spacing={2}>
          <Grid item className="w-24 h-24" xs={12}>
          {formik.values.image ?  
          <div className="relative border ">
              
                  <img
                    className="w-24 h-24 object-cover"
                    src="https://www.shutterstock.com/image-photo/colorful-farmland-landscape-lush-green-600nw-2669916459.jpg"
                    alt=""
                  />
                  <IconButton
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
          
            </div>:<>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
            />

            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternateIcon className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>

            </>}
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Titre"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="price"
              name="price"
              label="frais d'entretien"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="interviewDuration"
              name="interviewDuration"
              label="Durée d'entretien (mins)"
              type="number"
              value={formik.values.interviewDuration}
              onChange={formik.handleChange}
              error={formik.touched.interviewDuration && Boolean(formik.errors.interviewDuration)}
              helperText={formik.touched.interviewDuration && formik.errors.interviewDuration}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
              <Select className='w-52'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.category}
                label="Categorie"
                name="category"
                onChange={formik.handleChange}
              >
              {[1,1,1].map((item)=> <MenuItem>Agriculture</MenuItem>)}
               
               
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="outlined" fullWidth sx={{ py: ".8rem" }}>
              Ajouter nouvelle opportunité
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CreateOpportunityForm