import '@/styles/globals.css';
import DashBoard from '@/components/DashBoard';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null;
  }

  return (
    <Provider store={store}>
      <DashBoard>
        <Component {...pageProps} />
      </DashBoard>
    </Provider>
  );
}
