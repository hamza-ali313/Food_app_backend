import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import ProtectedRoute from "./containers/ProtectedRoute";
import CreateDish1 from "./containers/CreateDish1";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Dishes from "./containers/Dishes";
import ChefDishes from "./containers/ChefDishes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alldishes" element={<Dishes />} />
          <Route path="chefdishes" element={<ChefDishes />} />
          <Route
            path="/createdish"
            element={
              <ProtectedRoute>
                <CreateDish1 />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
