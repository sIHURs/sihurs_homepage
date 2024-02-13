import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'


// import Fonts from '../components/fonts'
// import { AnimatePresence } from 'framer-motion'
// import Chakra from '../components/chakra'
// import Phyhip from '../components/phyhip'
// import { Analytics } from '@vercel/analytics/react'

const Website = ( {Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website