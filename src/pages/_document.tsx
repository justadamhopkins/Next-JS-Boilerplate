import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render(): JSX.Element {
    const envKey = 'env-vars';
    return (
      <Html>
        <Head>
          <script
            id={envKey}
            key={envKey}
            data-testid={envKey}
            src={'/__ENV.js'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
