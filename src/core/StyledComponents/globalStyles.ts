
import { createGlobalStyle } from "styled-components";

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
    background: #dee3e0;
    font-family: 'Playfair Display', serif;
    margin: 0;
}`;
