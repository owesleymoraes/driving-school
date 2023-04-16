import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme = {
  colorYellow: "#ffc107",
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};
