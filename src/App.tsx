import React from "react";
import { HomePage } from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};
