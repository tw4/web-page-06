import {
  Text,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import SectionOne from './ui-library/components/SectionOne'
import MainLayout from './ui-library/Layouts/MainLayout'
import PageLayout from './ui-library/Layouts/PageLayout'

type Props = {}

const App = (props: Props) => {
  return (
    <MainLayout>
      <PageLayout>
        <Stack>
            <SectionOne/>
        </Stack>
      </PageLayout>
    </MainLayout>
  )
}

export default App