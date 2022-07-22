import React from 'react'
import {
    Box,
} from '@chakra-ui/react'

interface IProps {
    children: React.ReactElement
}

const PageLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <Box
                zIndex='1'
                bgGradient='linear(to-br, #2599D2, black 50%)'
                opacity='50%'
                overflow='hidden'
                height='30%'
                width='100%'
                position='fixed'
                top='0'
            >
            </Box>
            <Box
                position='absolute'
                zIndex='2'
            >
                {children}
            </Box>
        </div>
    )
}

export default PageLayout