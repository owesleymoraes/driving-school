import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./styles/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
