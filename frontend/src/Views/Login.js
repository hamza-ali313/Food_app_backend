import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [LoginData, setLoginData] = useState({
        userName: "",
        Password: "",
        Role: ""
    });

    const navigate = useNavigate();

    function LoginFunc() {
        if (LoginData.userName && LoginData.Password && LoginData.Role) {
            axios
                .post("/api/auth/login", {
                    username: LoginData.userName,
                    password: LoginData.Password,
                    role: LoginData.Role,
                })
                .then((response) => {
                    let data = response.data;
                    console.log(data);
                    console.log(data._id);
                    localStorage.setItem("id", data._id);
                    //   navigate("/todoapp", { replace: true });
                });
        } else {
            alert("invalid input");
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
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        setLoginData("");
                                    }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="User Name"
                                                value={LoginData.userName}
                                                onChange={LoginFunc}
                                            />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={LoginData.Password}
                                                onChange={LoginFunc}
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
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