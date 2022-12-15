import { AppProps } from 'next/app';
import React from 'react';

import AppContainer from '../components/shared/global/AppContainer';

import '@styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default MyApp;
