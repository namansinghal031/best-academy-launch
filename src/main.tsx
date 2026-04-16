import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";   // 👈 add this

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>   {/* 👈 wrap App */}
    <App />
  </HashRouter>
);
