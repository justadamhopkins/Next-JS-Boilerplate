import { FC, PropsWithChildren } from 'react';

import '@styles/styles.scss';
import Providers from './providers';

type TRootLayoutProps = {};
const RootLayout: FC<PropsWithChildren<TRootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
