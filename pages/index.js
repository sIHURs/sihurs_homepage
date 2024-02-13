import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, i&apos;m a ML Student from China!
            </Box>

            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Yifan Wang
                    </Heading>
                    <p>LUH Master Student, German - China </p>
                </Box>
            </Box>
        </Container>
        
    )
}

export default Page