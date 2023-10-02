import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import dish from "../images/lunch1.png"
import axios from "axios";
import { BASE_URL } from "../services/APIConfig";

const ChefDishes = () => {
  const [data, setData] = useState([]);
  const chef_ID = localStorage.getItem("id");

  function fetchTodo(user_id) {
    axios.get(`${BASE_URL}/dishes/${chef_ID}`).then((response) => {
      setData(response.data);
    });
  }
  useEffect(() => {
    fetchTodo();
    // fetchTodo(localStorage.getItem("id"));
    console.log(data);
  }, []);
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          {data.map((item, key) => (
            <Col lg={4} key={item._id}>
              <div className="dish-sec">
                <img
                  src={`http://localhost:3000/uploads/${item.dishImage}`}
                  alt="Dish"
                />
                <div>
                  <h3>{item.dishName}</h3>
                  <h3>{item.price}</h3>
                </div>
                <p>{item.description}</p>
                {/* <p>chef Name</p> */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ChefDishes;
