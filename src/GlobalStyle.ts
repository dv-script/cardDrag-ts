import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Poppins";
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(119,40,193,1) 0%, rgba(109,52,189,1) 12%, rgba(37,136,162,1) 100%);

  }
`
