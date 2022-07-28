import {
    Box,
    Text,
    Image,
    Button,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import star from '../../assets/images/star.svg'

interface IProps {
    title: string
    content: string
    image: any
}
const Card: React.FC<IProps> = ({ title, content, image }) => {
    return (
        <Box
            width='25%'
            height='250px'
        >
            <Box
                position='absolute'
                zIndex='2'
            >
                <Image
                    src={image}
                    width='100%'
                />
            </Box>
            <VStack
                bgColor='black'
                textAlign='left'
                width='20%'
                marginTop='7%'
                position='absolute'
                zIndex='1'
                borderWidth='1px'
                style={{
                    borderImage: 'linear-gradient(to bottom right, grey 30%, black 120%) 1'
                }}
                borderStyle='solid'
                borderRadius='10px'
            >
                <Text
                    width='100%'
                    color='white'
                    fontWeight='bold'
                    fontSize='xl'
                    paddingTop='30%'
                    paddingLeft='10%'
                >
                    {title}
                </Text>
                <Text
                    width='100%'
                    color='white'
                    paddingLeft='10%'
                >
                    {content}
                </Text>
                <Image
                    src={star}
                    marginTop='10%'
                    paddingLeft='50%'
                    paddingBottom='30%'
                />
                <Button
                    padding='10%'
                    borderTopWidth='0.5px'
                    borderColor='grey'
                    borderStyle='solid'
                    width='100%'
                    bgColor='black'
                    color='gray'
                    borderRadius='0px'
                    _hover={{
                        color: 'white'
                    }}
                >
                    Unsere Lösung
                </Button>
            </VStack>
        </Box>
    )
}

export default Card