import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #353535;
    --medGrey: #666b6c;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
  }

  *{
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body{
    padding: 0;
    
    h1{
      color: #161a1d;
      font-size: 2rem;
      font-weight: 600;
    }

    h3{
      font-size: 1.1rem;
      font-weight: 600;
    }

    p{
      font-size: 1rem;
      color: var(--darkGrey);
    }
  }
`;
