import { FC, PropsWithChildren } from 'react';

import AppContainer from '@core/AppContainer';
import '@styles/index.css';

import Providers from './providers';

type TRootLayoutProps = {};

const RootLayout: FC<PropsWithChildren<TRootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppContainer>{children}</AppContainer>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
