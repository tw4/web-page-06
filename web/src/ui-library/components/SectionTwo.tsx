import {
  Box,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import circle from '../../assets/images/circle.svg'
import Card from './Card'
import card1 from '../../assets/images/card1.svg'
import card2 from '../../assets/images/card2.svg'
import card3 from '../../assets/images/card3.svg'
import card4 from '../../assets/images/card4.svg'


interface IProps {
  changeLink: (newLink: string) => void
}

const SectionTwo: React.FC<IProps> = ({ changeLink }) => {
  return (
    <Box
      id='2'
      height='100vh'
      bgImage={circle}
      bgRepeat='no-repeat'
      bgPosition='center'
      bgSize='100vh'
      paddingTop='10%'
      onMouseOver={() => changeLink('2')}

    >
      <VStack
        marginTop='5%'
        marginBottom='5%'
      >
        <Text
          fontSize='3xl'
          fontWeight='bold'
          bgGradient='linear(to-l, grey, white, grey)'
          bgClip='text'
        >
          WIFI Technologie.
        </Text>
        <Text
          color='grey'
          fontSize='xl'
        >
          Unzählige Einsatzmöglichkeiten. Finden Sie Ihre:
        </Text>
      </VStack>
      <SimpleGrid
        marginLeft='5%'
        marginRight='5%'
        columns={[2, null, 4]}
        spacing={10}
      >
        <Card
          title='Home'
          content='Für ein smartes Zuhause.'
          image={card1}
        />
        <Card
          title='Business'
          content='Für ein vernetztes Unternehmen.'
          image={card2}
        />
        <Card
          title='Education'
          content='Für eine digitale Zukunft.'
          image={card3}
        />
        <Card
          title='Industrial'
          content='Für den digitalen Fortschritt.'
          image={card4}
        />
      </SimpleGrid>
    </Box>
  )
}

export default SectionTwo