import { createGlobalStyle } from "styled-components";

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

    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    
    a{
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export default GlobalStyles;
