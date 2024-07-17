import ReactDOM from "react-dom/client";
import React from "react";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);