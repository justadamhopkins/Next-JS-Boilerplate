import { FC, PropsWithChildren } from 'react';
import '@styles/styles.scss';

type TRootLayoutProps = {};
const RootLayout: FC<PropsWithChildren<TRootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
