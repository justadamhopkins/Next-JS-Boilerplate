import { css } from 'styled-components';

export const Fonts = css`
  @font-face {
    font-family: 'Nunito Sans';
    src: url('/fonts/NunitoSans-Bold.woff2') format('woff2'),
      url('/fonts/NunitoSans-Bold.woff') format('woff'),
      url('/fonts/NunitoSans-Bold.ttf') format('ttf');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: url('/fonts/NunitoSans-Regular.woff2') format('woff2'),
      url('/fonts/NunitoSans-Regular.woff') format('woff'),
      url('/fonts/NunitoSans-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: url('/fonts/NunitoSans-SemiBold.woff2') format('woff2'),
      url('/fonts/NunitoSans-SemiBold.woff') format('woff'),
      url('/fonts/NunitoSans-SemiBold.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;

export const fontFamilys = {
  nunitoSans: "'Nunito Sans', serif",
};
