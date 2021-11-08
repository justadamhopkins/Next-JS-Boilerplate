import Head from 'next/head';
import styled from 'styled-components';

import { breakpoint } from '../styles/breakpoints';

const H1 = styled.h1`
  color: red;
  ${breakpoint.md`
    color: orange;
  `}
`;

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Adam Hopkins boilerplate next js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <H1>dog</H1>
      </main>
    </>
  );
};

export default HomePage;
