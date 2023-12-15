import '@/styles/globals.css';
import DashBoard from '@/components/DashBoard';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Rent A Car</title>
        <link href="/transparan.png" rel="shortcut icon" type="image/png" sizes="32x32" />
      </Head>
      <Provider store={store}>
        <DashBoard>
          <Component {...pageProps} />
        </DashBoard>
      </Provider>
    </>

  );
}
