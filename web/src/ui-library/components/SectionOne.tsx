import React from 'react'
import {
    Box,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react'
import logo from '../../assets/images/logo.svg'
import productImage from '../../assets/images/productImage.svg'
import star from '../../assets/images/star.svg'

type Props = {}

const SectionOne = (props: Props) => {
    return (
        <Box
            height='100vh'
            color='grey'
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
            </HStack>
            <HStack
                marginTop='15%'
            >
                <VStack
                    height='320px'
                    width='33vw'
                    textAlign='start'
                >
                    <Text
                        width='100%'
                        fontSize='3xl'
                        fontWeight='bold'
                        bgGradient='linear(to-l, white, grey)'
                        bgClip='text'
                    >
                        SMAR WIFI <br /> FOR SMART PEOPLE
                    </Text>
                    <Text>
                        Das Leben ist zu kurz für schlechtes WIFI.
                        bietet Highend-Netzwerk-Technologien
                        für einen entspannteren Alltag und Arbeitswelt.
                        Und das außergewöhnlich einfach, sicher und zuverlässig.
                    </Text>
                </VStack>
                <VStack
                    width='33vw'
                >
                    <Image
                        src={productImage}
                        marginLeft='auto'
                        width='15vw'
                    />
                </VStack>
                <VStack
                    width='30vw'
                >
                    <HStack
                        marginLeft='45%'
                        width='100%'
                        textAlign='left'
                    >
                        <Image
                            src={star}
                            height='50px'
                        />
                        <Text>
                            Europäische, unabhängige
                            Hard- und Software
                        </Text>
                    </HStack>
                    <HStack
                        paddingTop='20%'
                        width='100%'
                        textAlign='left'
                    >
                        <Image
                            src={star}
                            height='50px'
                        />
                        <Text>
                            übersteigt alle gängigen
                            Sicherheitszertifizierungen
                        </Text>
                    </HStack>
                </VStack>
            </HStack>
            <Box
                marginTop='5%'
                textAlign='center'
                width='100%'
            >
                <Text
                    fontSize='4xl'
                    fontWeight='bold'
                    opacity='0.2'
                >
                    WIFI TECHNOLOGY.
                </Text>
            </Box>
        </Box>
    )
}

export default SectionOne