import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #FFFF;
    --black: #0c0d0d;
    --gradient: linear-gradient(to top, #000000, #38323c, #58677f, #67a7ba, #92e9d9);
    --primary: #92E9D9;    
    --test: #00BFFF;
  }

  body {
    background: #F8F8F8;
  }

  body, input, button {
    font-family: 'PT Serif', serif;
    font-size: 1rem;
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Roboto Mono';
    font-weight: 700;
    color: #4A5568;

  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

`;