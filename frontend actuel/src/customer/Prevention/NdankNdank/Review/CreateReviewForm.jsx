import React from 'react'
import { useFormik } from 'formik';
import { Box, Button, TextField, InputLabel, Rating } from '@mui/material';


const CreateReviewForm = () => {
  const formik = useFormik({
      initialValues: {
        reviewText: "",
        reviewRating: 0,
      },
      onSubmit: (values) => {
        console.log("Form Submitted:", values);
      }
    });
  
    return (
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 3 }}
        className="space-y-5 w-full lg:w-1/2"
      >
        <TextField
          fullWidth
          id="reviewText"
          name="reviewText"
          label="Review Text"
          variant="outlined"
          multiline
          rows={4}
          value={formik.values.reviewText}
          onChange={formik.handleChange}
        />
  
        <div className="space-y-2">
          <InputLabel>Appréciation</InputLabel>
          <Rating
            id="reviewRating"
            name="reviewRating"
            value={formik.values.reviewRating}
            onChange={(event, newValue) =>
              formik.setFieldValue("reviewRating", newValue)
            }
            precision={0.5}
          />
        </div>
        <Button color="primary" variant="contained" type="submit">
          Soumettre Avis
        </Button>
      </Box>
    )
}

export default CreateReviewForm