import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { liff, Liff } from '@line/liff';

import { Layout } from '../components/layout';
import './globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [liffObject, setLiffObject] = useState<null | Liff>(null);
  const [liffError, setLiffError] = useState<null | any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    console.log('start liff.init()...');
    liff
      .init({ liffId: process.env.LIFF_ID ?? '' })
      .then(() => {
        console.log('liff.init() done');
        setLiffObject(liff);
      })
      .catch((error) => {
        console.log(`liff.init() failed: ${error}`);
        if (!process.env.liffId) {
          console.info(
            'LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.',
          );
        }
        setLiffError(error.toString());
      });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
