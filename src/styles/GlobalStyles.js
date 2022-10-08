import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  body {
    font-family: Helvetica, sans-serif;

    h1 {
      color: ${({ theme }) => theme.colors.blueColor};
      margin-bottom: 1rem;
      font-size: 2.1rem;
    }

    #bold {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.blueColor};
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    input, textarea, button, select {
      outline: none;
      font-family: Helvetica, sans-serif;
      border-radius: 5px;
    }

    button {
      cursor: pointer;
      border: none;
    }
  }
`;

export default GlobalStyles;
