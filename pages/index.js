import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"
import Image from 'next/image'

const Page = () => {
    return (
        <Container>
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whilteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center"
            >
                Hello, i&apos;m a ML Student from China!
            </Box>

            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Yifan Wang
                    </Heading>
                    <p>LUH Master Student, German - China </p>
                </Box>
                <Box 
                    flexShrink={0}
                    mt={{ base: 4, md: 0}}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whilteAlpha.800"
                        bordwidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/me.png"
                            alt="profile image"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
        
    )
}

export default Page