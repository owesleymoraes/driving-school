import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { theme } from "./Themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};
