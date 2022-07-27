import {
    Box,
    VStack,
    Text,
    SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'
import sectionThreeBg from '../../assets/images/sectionThreeBg.svg'
import ImageCard from './ImageCard'
import imageCard1 from '../../assets/images/imageCard1.svg'
import imageCard2 from '../../assets/images/imageCard2.svg'

interface IProps {
    changeLink: (newLink: string) => void
}

const SectionThree: React.FC<IProps> = ({ changeLink }) => {
    return (
        <Box
            paddingTop='10%'
        >
            <Box
                id='3'
                height='100vh'
                paddingTop='10%'
                paddingLeft='5%'
                paddingRight='5%'
                onMouseOver={() => changeLink('3')}
                bgImage={sectionThreeBg}
                bgPosition='5% 60%'
                bgSize='45%'
                bgRepeat='no-repeat'
            >
                <VStack>
                    <Text
                        fontSize='3xl'
                        bgGradient='linear(to-l, white, grey)'
                        bgClip='text'
                        fontWeight='bold'
                    >
                        REFERENZEN
                    </Text>
                </VStack>
                <SimpleGrid
                    marginTop='2%'
                    columns={[2, null, 3]}
                    spacing={10}
                >
                    <ImageCard
                        image={imageCard1}
                    />
                    <ImageCard
                        image={imageCard2}
                    />
                    <ImageCard
                        image={imageCard2}
                    />

                </SimpleGrid>
            </Box>
        </Box>

    )
}

export default SectionThree