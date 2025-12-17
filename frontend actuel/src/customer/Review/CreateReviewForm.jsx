import React, { useState } from 'react'
import { Button, TextField, Rating, Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { createReview } from '../../Redux/Review/Action';

const CreateReviewForm = ({ companyId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
      title: "",
      description: "",
      rating: 0
  });

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRatingChange = (event, newValue) => {
      setFormData({...formData, rating: newValue});
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createReview({
          ...formData,
          companyId: Number(companyId)
      }));
      // Reset or show success
      setFormData({title:"", description:"", rating:0});
      alert("Avis envoyé !");
  };

  return (
    <div className='flex flex-col gap-3 p-5 border rounded-md md:w-[30rem]'>
       <Typography component="legend">Notez cette companie</Typography>
       <Rating
          name="simple-controlled"
          value={formData.rating}
          onChange={handleRatingChange}
        />
        <form onSubmit={handleSubmit} className="space-y-3">
             <TextField
                fullWidth
                label="Titre"
                name="title"
                value={formData.title}
                onChange={handleChange}
                variant="outlined"
             />
             <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                variant="outlined"
             />
             <Button type="submit" variant="contained" color="success">Soumettre</Button>
        </form>
    </div>
  )
}

export default CreateReviewForm