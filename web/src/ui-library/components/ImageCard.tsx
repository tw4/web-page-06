import {
  Box,
  HStack,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import React, { useState } from 'react'

interface IProps {
  image: any
}

const ImageCard: React.FC<IProps> = ({ image }) => {
  const [activeText, setActiveText] = useState<boolean>(false)
  return (
    <Box
      alignItems='center'
    >
      <Image
        onMouseEnter={() => setActiveText(true)}
        onMouseLeave={() => setActiveText(false)}
        src={image}
        transitionDuration='1s'
        width='80%'
        filter='brightness(50%)'
        _hover={{
          transitionDuration: '1s',
          width: '100%',
          padding: '1%',
          border: 'white 1px solid',
          filter: 'brightness(100%)'
        }}
      />
      <HStack
        alignItems='start'
      >
        <Text
          paddingTop='5%'
          width='50%'
          fontWeight='bold'
          textAlign='start'
          color='white'
        >
          Kreissparkasse Tuttlingen
        </Text>
        <UnorderedList
          paddingTop='5%'
          width='50%'
          color='white'
          opacity={activeText ? 1 : 0}
          transitionDuration='1s'
        >
          <ListItem>WiFi für 30 Standorte</ListItem>
          <ListItem>150 WLAN Router</ListItem>
          <ListItem>700 Mitarbeiter</ListItem>
          <ListItem>Kunden-WLAN</ListItem>
          <ListItem>Managed Service</ListItem>
        </UnorderedList>
      </HStack>
    </Box>
  )
}

export default ImageCard