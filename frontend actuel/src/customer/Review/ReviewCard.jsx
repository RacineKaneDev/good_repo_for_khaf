import React from "react";
import { Avatar, Grid2, IconButton } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";




const ReviewCard = () => {
 
  return (
    <div className="flex justify-between">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt=""
              src=""
            >
              RK
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Racine Kane</p>
              <p className="opacity-70">Il y a 2 jours</p>
            </div>
            <div>


              <Rating
                readOnly
                value={4.5}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />

            </div>
            <p>
              GIZ est une excellente et très serieuse compagnie dans le cadre des financements de projet.
            </p>
           
          </div>
        </Grid>
      </Grid>
      <IconButton>
        <DeleteIcon sx={{ color: red[700] }} />
      </IconButton>
    </div>
  );
};

export default ReviewCard;
