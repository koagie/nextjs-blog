import '../styles/globals.css'
import { ChakraProvider, chakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
