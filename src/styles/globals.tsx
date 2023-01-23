import {createGlobalStyle} from 'styled-components'

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

    background-color: #1B1A1A;
    color: #fff;
    
    a{
      text-decoration: none;
      color: #fff;
    }
  }
`;

export default GlobalStyles;