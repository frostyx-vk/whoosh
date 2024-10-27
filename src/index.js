import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./components/styles/vars.css";
import "./components/styles/reset.css";
import "./components/styles/index.css";
import "./components/styles/fonts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
