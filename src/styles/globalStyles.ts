import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.beige};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    /*** Works on common browsers ***/
    ::selection {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

    /*** Mozilla based browsers ***/
    ::-moz-selection {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

    /***For Other Browsers ***/
    ::-o-selection {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

    ::-ms-selection {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

    /*** For Webkit ***/
    ::-webkit-selection {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

  } 

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;
