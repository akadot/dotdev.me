import { createGlobalStyle } from "styled-components";

import colors from "../styles/themes/colors";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
  box-sizing: border-box; 
  }

  body{
    font-family: sans-serif;
    padding: 3.2rem;

    background-color: ${colors.primary};
    color: ${colors.secondary};
    
    a{
      text-decoration: none;
      color: ${colors.secondary};
    }
  }
`;

export default GlobalStyles;
