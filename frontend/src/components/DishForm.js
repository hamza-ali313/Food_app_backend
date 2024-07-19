import React, { useState } from 'react';
import { Button, TextField, Typography, Alert } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';

const DishForm = ({ dishData, handleChange, handleSubmit, previewImage, cancelUpload, uploadDisabled }) => {
  return (
    <div className="create-dish-frm">
      <Typography variant="h4" gutterBottom>
        Create Dish
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="dishName"
          value={dishData.dishName}
          onChange={handleChange}
          style={{ marginBottom: '1rem' }}
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={dishData.description}
          onChange={handleChange}
          multiline
          rows={4}
          style={{ marginBottom: '1rem' }}
          required
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={dishData.price}
          onChange={handleChange}
          style={{ marginBottom: '1rem' }}
          required
        />
        {!uploadDisabled && (
          <>
            <input
              accept="image/*"
              id="thumbnail-upload"
              type="file"
              name="thumbnail"
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="thumbnail-upload">
              <Button
                variant="outlined"
                component="span"
                startIcon={<CloudUploadIcon />}
                style={{ marginBottom: '1rem' }}
              >
                Upload Image
              </Button>
            </label>
          </> 
        )}
        {previewImage && (
          <div className="mb-5 img_preview">
            <Typography variant="h6">Image Preview:</Typography>
            <img src={previewImage} alt="Thumbnail Preview" style={{ width: '100px', maxHeight: '100px' }} />
            <Button onClick={cancelUpload}>
              <CancelIcon />
            </Button>
          </div>
        )}
        <Button type="submit" variant="contained" color="primary">
          Create Dish
        </Button>
      </form>
    </div>
  );
};

export default DishForm;
