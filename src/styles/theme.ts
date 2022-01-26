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

export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620'
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1'
};