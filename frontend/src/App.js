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
import React, { useState } from "react";
import "./index.css";
import CreateDish from "./Views/createDish";

const App = () => {
  return (
    <div>
      <CreateDish />
    </div>
  );
};

export default App;
