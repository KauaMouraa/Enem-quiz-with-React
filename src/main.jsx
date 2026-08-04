import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";   // ← trocado
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>                                     {/* ← trocado */}
    <App />
  </HashRouter>
);