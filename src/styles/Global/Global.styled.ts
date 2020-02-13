import { createGlobalStyle } from 'styled-components';
import { background } from '../config/palette';
import { font } from '../config/typography';

export const GlobalStyles = createGlobalStyle`
  body {
    ${background.base};
    ${font.base};
    margin: 0;
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    ${font.monospace}
  }
`;
