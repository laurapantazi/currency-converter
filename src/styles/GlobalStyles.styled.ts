import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme} :any) => theme.body};
    color: ${({theme}: any) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    margin: 0 !important;
    font-family: sans-serif;
  }
`;