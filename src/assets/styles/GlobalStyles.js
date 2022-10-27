import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  a, button {
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
