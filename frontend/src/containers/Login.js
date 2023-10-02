import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../services/APIConfig";
import { login, logout } from "../Redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [LoginData, setLoginData] = useState({
    userName: "",
    Password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function LoginFunc() {
    if (LoginData.userName && LoginData.Password) {
      axios
        .post(`${BASE_URL}/auth/login`, {
          username: LoginData.userName,
          password: LoginData.Password,
        })
        .then((response) => {
          let data = response.data;
          console.log(data);
          console.log(data._id);
          console.log(data.role);
          dispatch(login(data.role))
          navigate("/createdish")
          localStorage.setItem("id", data._id);
        });
    } else {
      alert("Please enter both username and password");
    }
  }

  return (
    <div className="register-sec">
      <Container>
        <Row>
          <Col md={6}>
            <div className="">
              <div className="register">
                <div className="title">
                  <h1>Login Form</h1>
                </div>
                <div className="form">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // You don't need to setLoginData("") here
                    }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        value={LoginData.userName}
                        onChange={(e) => setLoginData({ ...LoginData, userName: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={LoginData.Password}
                        onChange={(e) => setLoginData({ ...LoginData, Password: e.target.value })}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={LoginFunc}>
                      Login
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
