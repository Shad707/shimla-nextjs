import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
