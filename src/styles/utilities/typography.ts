import { fontFamilys } from '@styles/utilities/fonts';
import { EHeadingLevel } from 'common/types/enums/typography';
import { css } from 'styled-components';

export const headingStyles: Record<EHeadingLevel, ReturnType<typeof css>> = {
  [EHeadingLevel.One]: css`
    font-size: 4.209rem;
    font-family: ${fontFamilys.nunitoSans};
    font-weight: bold;
    font-style: normal;
  `,
  [EHeadingLevel.Two]: css`
    font-size: 3.157rem;
    font-family: ${fontFamilys.nunitoSans};
    font-weight: bold;
    font-style: normal;
  `,
  [EHeadingLevel.Three]: css`
    font-size: 2.369rem;
    font-family: ${fontFamilys.nunitoSans};
    font-weight: bold;
    font-style: normal;
  `,
  [EHeadingLevel.Four]: css`
    font-size: 1.777rem;
    font-family: ${fontFamilys.nunitoSans};
    font-weight: bold;
    font-style: normal;
  `,
  [EHeadingLevel.Five]: css`
    font-size: 1.333rem;
    font-family: ${fontFamilys.nunitoSans};
    font-weight: bold;
    font-style: normal;
  `,
};

export const Typography = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.25;
  }

  h1 {
    ${headingStyles.h1}
  }

  h2 {
    ${headingStyles.h2}
  }

  h3 {
    ${headingStyles.h3}
  }

  h4 {
    ${headingStyles.h4}
  }

  h5 {
    ${headingStyles.h5}
  }
`;
