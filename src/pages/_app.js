import '@/styles/globals.css'
import DashBoard from '@/components/DashBoard'

export default function App({ Component, pageProps }) {
  return <DashBoard>
    <Component {...pageProps} />
  </DashBoard>
}
