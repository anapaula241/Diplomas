import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin-top: 10px;
    margin-left: 10px;
    padding: 0;
  }
  *, *::after, *::before {
    // box-sizing: border-box;
  }
  body {
    // align-items: center;
    // background: #0D0C1D;
    // color: #EFFFFA;
    background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 300vh;
    justify-content: center;

    
     
    text-rendering: optimizeLegibility;
  }
  `