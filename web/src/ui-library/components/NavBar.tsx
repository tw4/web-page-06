import {
    Box,
    HStack,
    Image,
    Text,
    Link,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.svg'

interface IProps {
    link: string
    changeLink: (newLink: string) => void
}

const NavBar: React.FC<IProps> = ({ link, changeLink }) => {
    return (
        <Box
            width='100%'
            position='fixed'
            top='0'
            marginLeft='5%'
            marginRight='5%'
            marginTop='5%'
            zIndex='4'
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
                    width='100%'
                    paddingTop='1%'
                    fontSize='xl'
                    color='grey'
                    justifyContent='space-evenly'
                    transitionDuration='500ms'
                    opacity='0.0'
                    _hover={{
                        transitionDuration:'500ms',
                        opacity:'1',
                    }}
                >
                    <Link
                        onClick={() => changeLink('1')}
                        href='#1'
                        color={link === '1' ? 'white' : 'grey'}
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => changeLink('2')}
                        href='#2'
                        color={link === '2' ? 'white' : 'grey'}
                    >
                        Lösungen
                    </Link>
                    <Link
                        href='#3'
                    >
                        Über Uns
                    </Link>
                    <Link
                        href='#4'
                    >
                        REFERENZEN
                    </Link>
                    <Link
                        href='#5'
                    >
                        REFERENZEN
                    </Link>
                </HStack>
            </HStack>
        </Box>
    )
}

export default NavBar