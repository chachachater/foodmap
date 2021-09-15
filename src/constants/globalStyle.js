import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    display: flex;
  
    &:hover {
      text-decoration: none;
    }
  }
  
  a:hover {
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
  }

  
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
  button:hover, button:focus {
    outline: none;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
    font-size:  14px;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
