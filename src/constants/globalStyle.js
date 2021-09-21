import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    height: 100%;
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

const Wrapper = styled.div`
  min-height: calc(100vh - 190px);
  margin: 48px 0;
`

export { GlobalStyle, Wrapper};
