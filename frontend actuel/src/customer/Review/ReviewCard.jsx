import React from "react";
import { Avatar, Grid2, IconButton } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";




const ReviewCard = ({ item }) => {
 
  return (
    <div className="flex justify-between">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item?.author}
              src=""
            >
              {item?.author?.[0]}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{item?.author}</p>
              <p className="opacity-70">{item?.date}</p>
            </div>
            <div>


              <Rating
                readOnly
                value={item?.rating}
                name="half-rating"
                precision={0.5}
              />

            </div>
            <p>
              {item?.text}
            </p>
           
          </div>
        </Grid>
      </Grid>
      {item?.author === "Racine Kane" && (
        <IconButton>
          <DeleteIcon sx={{ color: red[700] }} />
        </IconButton>
      )}
    </div>
  );
};

export default ReviewCard;
