import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import star from '../../assets/images/star.svg'


type Props = {}

const Footer = (props: Props) => {
  return (
    <Box
      width='100%'
      paddingTop='10%'
      color='white'
    >
      <VStack>
        <Text
          bgGradient='linear(to-l, white, grey)'
          bgClip='text'
          fontSize='3xl'
        >
          Impressum
        </Text>
        <HStack
          paddingTop='5%'
          bgColor='black'
          paddingLeft='5%'
          paddingRight='5%'
        >
          <VStack
            textAlign='start'
            paddingLeft='2.5%'
            paddingRight='2.5%'
          >
            <Text>
              AirZen AG
              Matthofstrand 0
              0000 Luzern, Schweiz.
              UID CHE-000.000.000
              <br />
              Vertreten durch
              Steffen Siewert
            </Text>
            <Text>
              <br />
              Haftungsbeschränkung<br />
              <br />
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
              Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
              und Aktualität der bereitgestellten Inhalte.  ....
            </Text>
            <Box
              width='100%'
              alignItems='start'
            >
              <Image
                src={star}
                height='50px'
              />
            </Box>
          </VStack>
          <VStack
            textAlign='start'
            paddingLeft='2.5%'
            paddingRight='2.5%'
          >
            <Text>
              AirZen AG
              Matthofstrand 0
              0000 Luzern, Schweiz.
              UID CHE-000.000.000
              <br />
              Vertreten durch
              Steffen Siewert
            </Text>
            <Text>
              <br />
              Haftungsbeschränkung<br />
              <br />
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
              Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
              und Aktualität der bereitgestellten Inhalte.  ....
            </Text>
            <Box
              width='100%'
              alignItems='start'
            >
              <Image
                src={star}
                height='50px'
              />
            </Box>
          </VStack>
          <VStack
            textAlign='start'
            paddingLeft='2.5%'
            paddingRight='2.5%'
          >
            <Text>
              AirZen AG
              Matthofstrand 0
              0000 Luzern, Schweiz.
              UID CHE-000.000.000
              <br />
              Vertreten durch
              Steffen Siewert
            </Text>
            <Text>
              <br />
              Haftungsbeschränkung<br />
              <br />
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
              Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
              und Aktualität der bereitgestellten Inhalte.  ....
            </Text>
            <Box
              width='100%'
              alignItems='start'
            >
              <Image
                src={star}
                height='50px'
              />
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box >
  )
}

export default Footer