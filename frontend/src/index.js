import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // Import useSelector

import App from "./App.js";

import { Store } from "./Redux/Store";

function Main() {
  // const userRole = useSelector((state) => state.auth.userRole);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

reportWebVitals();
