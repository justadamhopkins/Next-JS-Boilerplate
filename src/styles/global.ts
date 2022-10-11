import { Fonts } from '@styles/utilities/fonts';
import { Settings } from '@styles/utilities/settings';
import { Typography } from '@styles/utilities/typography';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${Settings}
  ${normalize}
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1a202c;
    font-size: 62.5%;
  }

  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: #f7fafc;
    font-size: 1.6rem;
  }

  ${Fonts}
  ${Typography}
`;
