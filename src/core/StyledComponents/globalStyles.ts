
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
body {
    background: ${theme.palette.bgColor};
    font-family: 'Playfair Display', serif;
    margin: 0;
}`;
