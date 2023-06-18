import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MarvelProvider } from "./context/MarvelProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarvelProvider>
        <App />
      </MarvelProvider>
    </BrowserRouter>
  </React.StrictMode>
);
