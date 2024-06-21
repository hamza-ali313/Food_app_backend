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
import { login, logout } from "../Redux/authSlice";
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

  function loginFunc() {
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
          dispatch(login(loggedInUser.role));
          navigate("/createdish");
          localStorage.setItem("id", token);
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    } else {
      alert("Please enter both username and password");
    }
  }

  return (
    <div className="register-sec">
      <Container>
        <Grid container justifyContent="center">
          <Grid item md={6}>
            <div className="">
              <div className="register">
                <div className="title">
                  <Typography variant="h3" className="text-center">
                    Login Form
                  </Typography>
                </div>
                <div className="form">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
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
                      <MenuItem value="visitor">Visitor</MenuItem>
                    </Select>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={loginFunc}
                      className="mt-5"
                    >
                      Login
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
