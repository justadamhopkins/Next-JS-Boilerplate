import { AppProps } from 'next/app';
import React from 'react';
import {
  dehydrate,
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import AppContainer from '../components/shared/global/AppContainer';
import '@styles/styles.scss';

type TCoreAppProps = AppProps & {
  reactQueryProps: { dehydratedState: DehydratedState };
};

const CoreApp = ({ Component, reactQueryProps, pageProps }: TCoreAppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

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

  await queryClient.prefetchQuery('posts', () => ({
    foo: 'posts',
  }));

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
