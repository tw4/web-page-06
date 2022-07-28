import {
    Box,
    Text,
    VStack,
    Input,
    Button,
    Stack,
    Image,
} from '@chakra-ui/react'
import React from 'react'
import sectionFourBg from '../../assets/images/sectionFourBg.svg'
import sectionFourFormBg from '../../assets/images/sectionFourFormBg.svg'

interface IProps {
    changeLink: (newLink: string) => void
}

const SectionFour: React.FC<IProps> = ({ changeLink }) => {
    return (
        <Box
            id='4'
            height='100vh'
            marginTop='10%'
            marginLeft='10%'
            marginRight='10%'
            bgImage={sectionFourBg}
            bgRepeat='no-repeat'
            bgPosition='center'
            onMouseOver={() => changeLink('4')}
        >
            <VStack
                marginTop='13%'
            >
                <Text
                    marginTop='10%'
                    bgGradient='linear(to-l, white, grey)'
                    bgClip='text'
                    fontSize='3xl'
                    fontWeight='bold'
                >
                    Kontakt
                </Text>
                <Text
                    paddingTop='1%'
                    width='25%'
                    color='grey'
                    textAlign='start'
                >
                    Highend-Netzwerk-Technologien
                    für einen entspannteren Alltag
                    und Arbeitswelt.
                    Und das außer- gewöhnlich einfach, sicher und zuverlässig.
                </Text>
                <Stack
                    width='25%'
                    paddingTop='1%'
                >
                    <Box>
                        <Text
                            color='grey'
                        >
                            Name
                        </Text>
                        <Input
                            placeholder='Vorname Nachname'
                            style={{
                                borderImage: 'linear-gradient(to top, grey 0%, black 150%) 1'
                            }}
                        />
                    </Box>
                    <Box>
                        <Text
                            color='grey'
                        >
                            Email Adresse
                        </Text>
                        <Input
                            placeholder='meine@email.io'
                            style={{
                                borderImage: 'linear-gradient(to top, grey 0%, black 150%) 1'
                            }}
                        />
                    </Box>
                    <Box>
                        <Input
                            placeholder='Ihre Nachricht'
                            style={{
                                borderImage: 'linear-gradient(to top, grey 0%, black 150%) 1'
                            }}
                        />
                    </Box>
                    <Box
                        textAlign='center'
                        paddingTop='15%'
                        bgImage={sectionFourFormBg}
                        bgSize='100%'
                        bgPosition='bottom'
                    >
                        <Button
                            paddingLeft='20%'
                            paddingRight='20%'
                            marginBottom='50%'
                            bgGradient='linear(to-br, black -200%, #159BDE , black 120% )'
                            color='white'
                            _hover={{
                                bgGradient: 'linear(to-bl, black -200%, #159BDE , black 120% )'
                            }}
                            _active={{
                                bgGradient: 'linear(to-tl, black -200%, #159BDE , black 120% )'
                            }}
                        >
                            senden
                        </Button>
                    </Box>
                </Stack>
            </VStack>
        </Box>
    )
}

export default SectionFour