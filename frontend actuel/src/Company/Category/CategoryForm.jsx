import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import { Grid, TextField, Button, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';



const CategoryForm = () => {
  const [uploadImage, setUploadingImage] = useState(false);
    const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    
   
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
        <Grid container spacing={2}>
          <Grid className="w-24 h-24" size={{ xs: 12 }}>
        
          {formik.values.image ?  
          <div className="relative border ">
              
                  <img
                    className="w-24 h-24 object-cover"
                    src="https://www.pure-illusion.com/media/cache/cover_site_content/2022/05/4761-optimisation-ecommerce.jpeg"
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
          <Grid size={{ xs: 12, sm: 12 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="titre"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
            />
          </Grid>

          <Grid size={12}>
            <Button type="submit" variant="outlined" fullWidth sx={{ py: ".8rem" }}>
             créer categorie
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
   
}

export default CategoryForm