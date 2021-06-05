import React from "react";
import ReactDOM from "react-dom";
import List from "./Components/List";
import "./styles.css";
//import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="main">
    <List />
  </div>,
  rootElement
);
