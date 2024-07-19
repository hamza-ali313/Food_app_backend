import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../services/APIConfig";
import { login } from "../Redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
    userRole: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginFunc = (e) => {
    e.preventDefault();
    if (loginData.userName && loginData.password) {
      axios
        .post(`${BASE_URL}/api/v1/users/login`, {
          username: loginData.userName,
          password: loginData.password,
          userRole: loginData.userRole,
        })
        .then((response) => {
          let { token, loggedInUser } = response.data;
          console.log(loggedInUser);
          dispatch(login({ role: loggedInUser.role, id: loggedInUser._id , name: loggedInUser.username }));
          navigate("/CreateDish1");
          localStorage.setItem("token", token);
          localStorage.setItem("id", loggedInUser._id);
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="register-sec">
      <Container>
        <Grid container justifyContent="center">
          <Grid item md={6}>
            <div className="register">
              <div className="title">
                <Typography variant="h3" className="text-center">
                  Login Form
                </Typography>
              </div>
              <div className="form">
                <form onSubmit={loginFunc}>
                  <TextField
                    fullWidth
                    label="User Name"
                    name="userName"
                    value={loginData.userName}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <InputLabel htmlFor="userRole">User Role</InputLabel>
                  <Select
                    fullWidth
                    label="User_Role"
                    name="userRole"
                    value={loginData.userRole}
                    onChange={handleChange}
                    margin="normal"
                  >
                    <MenuItem value="chef">Chef</MenuItem>
                    <MenuItem value="foodie">Foodie</MenuItem>
                  </Select>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="mt-5"
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
