import React from "react";
import { AppRoute } from "./_app-route";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoute />
    </ThemeProvider>
  );
};
