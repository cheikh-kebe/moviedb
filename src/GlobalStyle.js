import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --maxWidth: 1280px;
    --white: #ffffff;
    --lightGrey: #f5f3f4;
    --medGrey: #d3d3d3;
    --darkGrey: #b1a7a6;
    --shineRed: #e5383b;
    --red: #ba181b;
    --medDarkRed: #a4161a;
    --darkRed: #660708;
    --lightBlack: #161a1d;
    --black: #0b090a;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: .5rem;
  }

  *{
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body{
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    h1{
      color: ${({ theme }) => theme.heroTitle};
      transition: all 0.5s linear;
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
