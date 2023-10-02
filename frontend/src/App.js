import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { Provider, useSelector } from "react-redux"; // Import useSelector

import ProtectedRoute from "./containers/ProtectedRoute";
import CreateDish from "./containers/CreateDish";
import Register from "./containers/Register";
import Login from "./containers/Login";
import AllDishes from "./containers/AllDishes";
import ChefDishes from "./containers/ChefDishes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alldishes" element={<AllDishes />} />
          <Route path="chefdishes" element={<ChefDishes />} />
          <Route
            path="/createdish"
            element={
              <ProtectedRoute>
                <CreateDish />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
