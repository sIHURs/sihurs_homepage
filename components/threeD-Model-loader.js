import { forwardRef } from 'react'
import { Box , Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
    <Spinner
        size='x1'
        position="absolute"
        left="50%"
        right="50%"
        ml="clac(0px - var(--spinner-size) / 2)"
        mt="clac(0px - var(--spinner-size))"
    />    
)

export const ModelContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="threeD-model"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
    >
        {children}
    </Box>
)) 

const Loader = () => {
    return (
        <ModelSpinner>
            <ModelSpinner />
        </ModelSpinner>
    )
}

export default Loader