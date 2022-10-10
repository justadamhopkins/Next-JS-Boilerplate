import { GlobalStyles } from '@styles/global';
import { AppProps } from 'next/app';
import React from 'react';

import AppContainer from '../components/shared/global/AppContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default MyApp;
