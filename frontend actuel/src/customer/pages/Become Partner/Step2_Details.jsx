import React, { useState } from "react";
import { Box, CircularProgress, IconButton, Stack, TextField } from "@mui/material";
import {
  LocalizationProvider,
  MobileTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { uploadToCloudinary } from "../../../util/uploadToCloudnary";
import { AddPhotoAlternate, Close } from "@mui/icons-material";

const Step2_Details = ({ formik }) => {
  const [uploadImage, setUploadingImage] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadingImage(true);
      const image = await uploadToCloudinary(file);
      // const image = URL.createObjectURL(file); // fallback if needed
      formik.setFieldValue("images", [
        ...(formik.values.images || []),
        image,
      ]);
      setUploadingImage(false);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...(formik.values.images || [])];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <Box className="space-y-5">
      
      {/* Image Upload Section */}
      <div className="flex flex-wrap gap-5">
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <label className="relative" htmlFor="fileInput">
          <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400 hover:border-teal-500">
            <AddPhotoAlternate className="text-gray-700 hover:text-teal-600" />
          </span>
          {uploadImage && (
            <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center bg-white bg-opacity-70">
              <CircularProgress size={24} />
            </div>
          )}
        </label>

        <div className="flex flex-wrap gap-2">
          {formik.values.images?.map((image, index) => (
            <div className="relative" key={index}>
              <img
                className="w-24 h-24 object-cover rounded-md border border-gray-200"
                src={image}
                alt={`Company Image ${index + 1}`}
              />
              <IconButton
                onClick={() => handleRemoveImage(index)}
                size="small"
                color="error"
                sx={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "#ffebee" }
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            </div>
          ))}
        </div>
      </div>

      <TextField
        fullWidth
        name="name"
        label="Nom de l'Entreprise"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <TimePicker
            label="Heure d'Ouverture"
            value={formik.values.openTime}
            onChange={(newValue) => {
              formik.setFieldValue("openTime", newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <TimePicker
            label="Heure de Fermeture"
             value={formik.values.closeTime}
            onChange={(newValue) => {
              formik.setFieldValue("closeTime", newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
};

export default Step2_Details;
