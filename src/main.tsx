import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import BgChanger from "./BgChanger";
// import RandomTextGenerator from "./components/RandomTextGenerator";
import Currency from "./currency/Currency";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Currency />
  </React.StrictMode>
);
