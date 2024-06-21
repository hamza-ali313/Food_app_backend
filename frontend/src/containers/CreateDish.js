import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { BASE_URL } from "../services/APIConfig";

function CreateDish() {
  const [frm, setFrm] = useState(true);
  const [message, setMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [dishData, setDishData] = useState({
    dishName: "",
    description: "",
    price: "",
    chef_id: localStorage.getItem("id"),
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail") {
      const file = files[0];
      setDishData({
        ...dishData,
        thumbnail: file,
      });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setDishData({
        ...dishData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("dishName", dishData.dishName);
      formData.append("description", dishData.description);
      formData.append("price", dishData.price);
      formData.append("dishImage", dishData.thumbnail);
      formData.append("chef_id", dishData.chef_id);

      const response = await axios.post(`${BASE_URL}/api/v1/dishes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data);
      setFrm(!frm);
      console.log("Dish created:", response.data);
    } catch (error) {
      console.error("Error creating dish:", error);
    }
  };
  const cancelUpload = () => {
    setDishData({
      ...dishData,
      thumbnail: null,
    });
    setPreviewImage(null);
    setUploadDisabled(false);
  };
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setFrm(!frm)}
        style={{ marginBottom: "1rem" }}
      >
        Create Dish
      </Button>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          {frm ? (
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
                  style={{ marginBottom: "1rem" }}
                />
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={dishData.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  style={{ marginBottom: "1rem" }}
                />
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  type="number"
                  value={dishData.price}
                  onChange={handleChange}
                  style={{ marginBottom: "1rem" }}
                />
                <input
                  accept="image/*"
                  id="thumbnail-upload"
                  type="file"
                  name="thumbnail"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="thumbnail-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    style={{ marginBottom: "1rem" }}
                    disabled={uploadDisabled}
                  >
                    Upload Image
                  </Button>
                </label>
                {previewImage && (
                  <div className="mb-5" className='img_preview'>
                    <Typography variant="h6">Image Preview:</Typography>
                    <img
                      src={previewImage}
                      alt="Thumbnail Preview"
                      style={{ width: "100px", maxHeight: "100px" }}
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={cancelUpload}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
                <Button type="submit" variant="contained" color="primary">
                  Create Dish
                </Button>
              </form>
            </div>
          ) : (
            <div>{message}</div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateDish;
