import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
