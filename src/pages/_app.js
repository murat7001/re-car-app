import '@/styles/globals.css'
import DashBoard from '@/components/DashBoard'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
            <DashBoard>
              <Component {...pageProps} />
            </DashBoard>
          </Provider>
}
