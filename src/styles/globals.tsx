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

    background-color: $dark;
    color: $light;
    
    a{
      text-decoration: none;
      color: $light;
    }
  }

  .dark{
    .background{
        background-color: $dark;
    }
    .text{
        color: $light;
    }
  }

  .light{
    .background{
        background-color: $light;
    }
    .text{
        color: $dark;
    }
  }
`;

// $dark: #1B1A1A;
// $light: #fff;

// //TODO: remove one
// $yellow: #FEEF2A;
// $green: #05FF69;
// $purple: #9C6CFF;
// $red: #FF5277;
// $blue: #58D1EB;


export default GlobalStyles;