import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/APIConfig";
import { Button, Container, Row, Col } from "react-bootstrap";

function CreateDish() {
  const [frm, setFrm] = useState(true)

  const [dishData, setDishData] = useState({
    dishName: "",
    description: "",
    price: "",
    dishImage: null, // Initialize dishImage as null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "dishImage") {
      // Handle file input separately
      setDishData({
        ...dishData,
        dishImage: files[0], // Store the selected file object
      });
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
      // Create a FormData object to handle the file upload
      const formData = new FormData();
      formData.append("dishName", dishData.dishName);
      formData.append("description", dishData.description);
      formData.append("price", dishData.price);
      formData.append("dishImage", dishData.dishImage);

      const response = await axios.post(
        `${BASE_URL}/dishes/createDish`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart form data
          },
        }
      );

      console.log("Dish created:", response.data);
      // Handle success or update UI
    } catch (error) {
      console.error("Error creating dish:", error);
      // Handle error or show error message
    }
  };

  return (
    <Container>
      <Button variant="primary" className="float-right" onClick={() => setFrm(!frm)}>Create Dish</Button>{' '}
      <Row className="justify-content-center">
        <Col lg={4}>
          {
            frm ? (
              <div className="create-dish-frm">
                <h2>Create  Dish</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <br />
                    <input
                      type="text"
                      name="dishName"
                      value={dishData.dishName}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Description
                    <br />
                    <textarea
                      name="description"
                      value={dishData.description}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Price
                    <br />
                    <input
                      type="number"
                      name="price"
                      value={dishData.price}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    Upload Image
                    <br />
                    <input type="file" name="dishImage" onChange={handleChange} />
                  </label>
                  <br />
                  <Button type="submit" variant="primary">Create Dish</Button>
                </form>
              </div>
            ) : <div></div>
          }
        </Col>
      </Row>
    </Container>

  );
}

export default CreateDish;
