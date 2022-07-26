import {
    Box,
    HStack,
    Image,
    Text,
    Link,
} from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/images/logo.svg'

interface IProps {
    divName:string
}

const NavBar:React.FC<IProps> = ({divName}) => {
    return (
        <Box
            marginLeft='5%'
            marginRight='5%'
            marginTop='5%'
        >
            <HStack
            >
                <Image
                    src={logo}
                    height='50px'
                />
                <Text
                    paddingTop='1%'
                    fontSize='xl'
                    color='white'
                >
                    WIFI
                </Text>
                <HStack
                paddingTop='1%'
                fontSize='xl'
                width='100%'
                justifyContent='space-evenly'
                >
                <Link
                    href='#2'
                    color={divName === '2'? 'white' : 'grey'}
                >
                    Lösungen
                </Link>
                <Link
                    href='#3'
                    color={divName === '3'? 'white' : 'grey'}
                >
                    Über Uns
                </Link>
                <Link
                href='#4'
                color={divName === '4'? 'white' : 'grey'}
                >
                    REFERENZEN
                </Link>
                <Link
                    href='#5'
                    color={divName === '5'? 'white' : 'grey'}
                >
                    REFERENZEN
                </Link>
            </HStack>
            </HStack>
        </Box>
    )
}

export default NavBar