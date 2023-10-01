import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import {
  Container,
  Row,
  Col,
  Carousel,
  Nav,
  Tab,
  Sonnet,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import CreateDish from "./containers/CreateDish.js";
import Register from "./containers/Register";
import Login from "./containers/Login.js";
import AllDishes from "./containers/AllDishes.js";
// IMPORT PAGES

// NEW
function Main() {
  return (
    <BrowserRouter>
      {/* <header className="pageheader"><Header /></header> */}
      <Routes>
        <Route path="/" element={<Register/>} className="ppp" />
        <Route path="/createdish" element={<CreateDish />} className="ppp" />
        <Route path="login" element={<Login />} className="ppp" />
        <Route path="alldishes" element={<AllDishes />} className="ppp" />
      </Routes>
      {/* <footer><Footer /></footer> */}
    </BrowserRouter>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
