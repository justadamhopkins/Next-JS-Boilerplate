import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import '@styles/core/variables.css';
import '@styles/core/global.css';
import '@styles/core/reset.css';
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
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
