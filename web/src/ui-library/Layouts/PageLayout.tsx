import React from 'react'
import {
    Box,
    Image,
} from '@chakra-ui/react'
import bgImage from '../../assets/images/bgImage.svg'

interface IProps {
    children: React.ReactElement
}

const PageLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <Box
                zIndex='1'
                bgGradient='linear(to-br, #2599D2, black 40%)'
                opacity='50%'
                overflow='hidden'
                height='40%'
                width='100%'
                position='fixed'
                top='0'
            >
            </Box>
            <Box
                position='absolute'
                zIndex='2'
            >
                <Image
                    src={bgImage}
                    width='70%'
                    marginLeft='auto'
                />
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