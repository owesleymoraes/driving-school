import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        dark: string;
        light: string;
        text: string;
      };
      danger: {
        main: string;
        dark: string;
        text: string;
      };
    };
  }
}
