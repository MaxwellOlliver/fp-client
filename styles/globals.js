import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  html, body {
    font-size: 16px;
  }
`;
