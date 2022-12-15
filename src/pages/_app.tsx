import { AppProps } from 'next/app';
import React from 'react';

import AppContainer from '../components/shared/global/AppContainer';
import { GlobalStyles } from '../stylesd/global';
import '../styles/global.scss';

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
