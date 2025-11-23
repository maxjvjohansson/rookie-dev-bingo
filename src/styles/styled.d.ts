import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string;
      yellow: string;
      beige: string;
      gray: string;
      white: string;
      black: string;
    };
    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadow: {
      sm: string;
      md: string;
    };
    typography: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    media: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
