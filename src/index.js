import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./utils/rem";
import "./assets/css/init.css";
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
