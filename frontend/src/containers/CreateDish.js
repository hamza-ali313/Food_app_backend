import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Alert,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BASE_URL } from "../services/APIConfig";
import { Col, Row } from "react-bootstrap";

function CreateDish() {
  const [frm, setFrm] = useState(true);
  const [data, setData] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [dishData, setDishData] = useState({
    dishName: "",
    description: "",
    price: "",
    thumbnail: null,
    chef_id: localStorage.getItem("id"),
  });

  // console.log('fetching dishes ===========>',data)

  const fetchDishes = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/dishes/${localStorage.getItem("id")}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };
  // useEffect(() => {
  //   fetchDishes();
  // }, []);

  const deleteDish = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/v1/dishes/${id}`);
      console.log("Dish deleted:", response.data);
      setData(data.filter((dish) => dish._id !== id));
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  // const editDish = async (id) => {
  //   setFrm(true);
  //   try {
  //     const response = await axios.get(`${BASE_URL}/api/v1/dishes/${id}`);
  //     const { dishName, description, price, thumbnail } = response.data;
  //     setDishData({
  //       dishName,
  //       description,
  //       price,
  //       thumbnail,
  //       chef_id: localStorage.getItem("id"),
  //     });
  //     setPreviewImage(`${BASE_URL}/${thumbnail}`);
  //     setUploadDisabled(true);
  //     // setEditId(id);
  //   } catch (error) {
  //     console.error("Error fetching dish details:", error);
  //   }
  // };

  useEffect(() => {
      fetchDishes();
  }, [frm]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail" && files[0]) {
      const file = files[0];
      setDishData((prevState) => ({
        ...prevState,
        thumbnail: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
      setUploadDisabled(true);
    } else {
      setDishData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !dishData.dishName ||
      !dishData.description ||
      !dishData.price ||
      !dishData.thumbnail
    ) {
      Alert("All fields are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("dishName", dishData.dishName);
      formData.append("description", dishData.description);
      formData.append("price", dishData.price);
      formData.append("thumbnail", dishData.thumbnail);
      formData.append("chef_id", dishData.chef_id);

      const response = await axios.post(`${BASE_URL}/api/v1/dishes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // const chefdishes = await axios.get(
      //   `${BASE_URL}/api/v1/dishes/${localStorage.getItem("id")}`
      // );
      // setData(chefdishes.data);
      setFrm(!frm);

      // Reset form fields
      setDishData({
        dishName: "",
        description: "",
        price: "",
        thumbnail: null,
        chef_id: localStorage.getItem("id"),
      });
      setPreviewImage(null);
      setUploadDisabled(false);
      console.log("Dish created:", response.data);
    } catch (error) {
      console.error("Error creating dish:", error);
    }
  };

  const cancelUpload = () => {
    setDishData((prevState) => ({
      ...prevState,
      thumbnail: null,
    }));
    setPreviewImage(null);
    setUploadDisabled(false);
  };

  const handleExpandClick = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setFrm(!frm)}
        style={{ marginBottom: "1rem" }}
      >
        {frm ? "View Dishes" : "Create Dish"}
      </Button>
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
              style={{ marginBottom: "1rem" }}
              required
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={dishData.price}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
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
                  style={{ display: "none" }}
                />
                <label htmlFor="thumbnail-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    style={{ marginBottom: "1rem" }}
                  >
                    Upload Image
                  </Button>
                </label>
              </>
            )}
            {previewImage && (
              <div className="mb-5 img_preview">
                <Typography variant="h6">Image Preview:</Typography>
                <img
                  src={previewImage}
                  alt="Thumbnail Preview"
                  style={{ width: "100px", maxHeight: "100px" }}
                />
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
      ) : (
        <Row className="chefdishes-sec">
          {data.map((item, i) => {
            // console.log('dataa', item.dishName)
            return (
              <Col key={i} lg={4} className="mb-5">
                <Card>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => deleteDish(item._id)}>
                        Delete
                      </Dropdown.Item>
                      {/* <Dropdown.Item onClick={() => editDish()}>
                        Edit Dish
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <h2>{item.dishName}</h2>
                  <CardMedia
                    component="img"
                    height="194"
                    image={`${BASE_URL}/${item.thumbnail}`}
                    alt="Dish Image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      expand={expanded[item._id]}
                      onClick={() => handleExpandClick(item._id)}
                      aria-expanded={expanded[item._id]}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse
                    in={expanded[item._id]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default CreateDish;
