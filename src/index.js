import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./store";
import "./styles.css";

const Main = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
