import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  //temp
  /* :root {
    $primary-bg: "#1E1E1E";
    $secondary-bg: "#ffffff";

    $purple:"#9b5de5";
    $red:"#e63946";
    $green:"#50fa7b";
    $yellow:"#ffbe0b";
  } */
  
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  
  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 15rem;
  
    background-color:#1E1E1E;
    color: #ffffff;
  }
  
  span{
    font-size: 0.9rem;
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;