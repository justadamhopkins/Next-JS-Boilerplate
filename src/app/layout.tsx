import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import '@styles/core/variables.css';
import '@styles/core/global.css';
import '@styles/core/reset.css';
import AppContainer from '@core/AppContainer';
import { FONT_NUNITO_SANS } from '@styles/core/fonts';

import Providers from './providers';

type TRootLayoutProps = {};
const RootLayout: FC<PropsWithChildren<TRootLayoutProps>> = ({ children }) => {
  return (
    <html
      lang="en"
      className={clsx(
        FONT_NUNITO_SANS.className,
        `${FONT_NUNITO_SANS.variable}`,
      )}
    >
      <body>
        <Providers>
          <AppContainer>{children}</AppContainer>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
