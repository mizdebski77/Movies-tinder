
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
    background: radial-gradient(circle, rgba(251,63,180,0.16290266106442575) 0%, rgba(70,196,252,1) 100%);
    font-family: 'Playfair Display', serif;
    margin: 0;
}`;
