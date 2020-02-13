import { css } from 'styled-components';
import { rem } from 'polished';

const BASE_FONT_SIZE = 16;
const BASE_LINE_HEIGHT = 1.618;

export const imports = [
  'https://fonts.googleapis.com/css?family=Courier+Prime|Montserrat:300,400,500,600|Staatliches&display=swap',
];

export const lineHeight = {
  base: css`
    line-height: ${BASE_LINE_HEIGHT}rem;
  `,
  custom: (fontSize: number) => css`
    line-height: ${rem(fontSize * BASE_LINE_HEIGHT, BASE_FONT_SIZE)};
  `,
};

export const fontSize = {
  base: css`
    font-size: ${BASE_FONT_SIZE}px;
  `,
};

export const font = {
  base: css`
    font-family: 'Montserrat', sans-serif;
    ${fontSize.base};
    ${lineHeight.base};
  `,
  heading: css`
    font-family: 'Staatliches', cursive;
    text-transform: uppercase;
  `,
  monospace: css`
    font-family: 'Courier Prime', monospace;
  `,
};
