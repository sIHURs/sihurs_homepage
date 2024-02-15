import Head from "next/head"
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
// import VoxelDogLoader from '../vocel-dog-loader'
import ThreeDModelLoader from '../threeD-Model-loader'

// * 3D- model

const ThreeDModel = dynamic(() => import('../threeD-model'), {
    ssr: false,
    loading: () => <ThreeDModelLoader />
})


const Main = ({ children, router}) => {
    return (
        <Box as="main" pd={8}>
            <Head>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                {/* <meta name="discription" content="Yifan's homapage" /> */}
                {/* <meta name="author" content="Yifan Wang" />
                <meta name="author" content="Sihurs"/>
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Yifan Wang" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Sihurs" />
                <meta name="twitter:creator" content="@Sihurs" /> */}
                {/* <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
                {/* <meta property="og:site_name" content="Yifan Wang" />
                <meta name="og:title" content="Yifan Wang" />
                <meta property="og:type" content="website" /> */}
                {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
                <title>Yifan Wang - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <ThreeDModel />

                {children}

                {/* <Footer /> */}
            </Container>

        </Box>
    )
} 

export default Main