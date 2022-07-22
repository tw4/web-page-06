import {
  Text,
} from '@chakra-ui/react'
import React from 'react'
import MainLayout from './ui-library/Layouts/MainLayout'
import PageLayout from './ui-library/Layouts/PageLayout'

type Props = {}

const App = (props: Props) => {
  return (
    <MainLayout>
      <PageLayout>
        <Text>Hello Word</Text>
      </PageLayout>
    </MainLayout>
  )
}

export default App