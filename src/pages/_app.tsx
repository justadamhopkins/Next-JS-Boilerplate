import { AppProps } from 'next/app';
import React, { useState } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import {
  FIFTEEN_MINUTES_IN_MS,
  FIVE_MINUTES_IN_MS,
} from '@common/constants/times';
import http from '@common/http';
import { getAllCharacters } from '@common/http/services/harryPotter/requests';
import AppContainer from '@core/AppContainer';

import '@styles/styles.scss';

type TCoreAppProps = AppProps & {
  reactQueryProps: { dehydratedState: DehydratedState };
};

const CoreApp = ({ Component, reactQueryProps, pageProps }: TCoreAppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            cacheTime: FIFTEEN_MINUTES_IN_MS,
            staleTime: FIVE_MINUTES_IN_MS,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={reactQueryProps.dehydratedState}>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

CoreApp.getInitialProps = async ({ Component, ctx }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('characters', () =>
    http.send(getAllCharacters()),
  );

  return {
    pageProps: Component.getServerSideProps
      ? await Component.getServerSideProps(ctx)
      : {},
    reactQueryProps: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default CoreApp;
