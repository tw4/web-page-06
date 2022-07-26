import {
    Box,
    Button,
    HStack,
    VStack,
    Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {}

const CookiesBar = (props: Props) => {
    const [acrive, setActive] = useState<boolean>(true)
    return (
        <Box
            hidden={!acrive}
            width='100vw'
            overflow='hidden'
            position='fixed'
            height='12%'
            bottom='0'
            bgColor='black'
            zIndex='3'
        >
            <HStack
                marginLeft='5%'
                marginRight='5%'
            >
                <VStack>
                    <Button
                        onClick={() => setActive(false)}
                        bgGradient='linear(to-r, #669AB4, #7BB690)'
                        color='white'
                        width='100%'
                        _hover={{
                            bgGradient: 'linear(to-r, #7BB690, #669AB4)'
                        }}
                    >
                        Cookies akzeptieren
                    </Button>
                    <Button
                        onClick={() => setActive(false)}

                        borderWidth='1px'
                        borderStyle='solid'
                        color='white'
                        width='100%'
                        bgColor='black'
                        style={{
                            borderImage: 'linear-gradient(to right, #669AB4, #7BB690) 1'
                        }}
                        _hover={{
                            bgGradient: 'linear(to-r, #669AB4, #7BB690)'
                        }}
                    >
                        Cookies anpassen
                    </Button>
                </VStack>
                <Text
                    color='white'
                    textAlign='justify'
                    paddingLeft='5%'
                    paddingRight='5%'
                >
                    Wir verwenden Cookies, um Ihr Erlebnis auf unserer Seite besser und persönlicher zu gestalten und Ihnen passende Werbung zu liefern. Weitere Informationen finden Sie in unserer Cookie-Richtlinie. Mit dem Anklicken von "Cookies annehmen" stimmen Sie unserer Verwendung von Cookies zu.
                </Text>
            </HStack>
        </Box>
    )
}

export default CookiesBar