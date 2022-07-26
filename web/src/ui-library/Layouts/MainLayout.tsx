import {
    Box
} from '@chakra-ui/react'
import React from 'react'

interface IProps {
    children: React.ReactElement
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Box
            height='500vh'
            width='100%'
            bgColor='black'
            overflowX='hidden'
        >
            {children}
        </Box>
    )
}

export default MainLayout