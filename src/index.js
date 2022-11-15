import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToggleProvider } from "./contexts/ToggleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
