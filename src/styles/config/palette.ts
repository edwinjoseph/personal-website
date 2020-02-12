import { css } from 'styled-components';

export const palette = {
  black: '#272727',
  saffron: '#FE9920',
  charcoal: '#2E4052',
  bone: '#E0DDCF',
  grey: '#495159',
  white: '#FFFFFF',
};

export const background = {
  base: css`
    background-color: ${palette.white};
    color: ${palette.black};
  `,
  black: css`
    background-color: ${palette.black};
    color: ${palette.saffron};
  `,
  charcoal: css`
    background-color: ${palette.charcoal};
    color: ${palette.bone};
  `,
  bone: css`
    background-color: ${palette.bone};
    color: ${palette.charcoal};
  `,
};
