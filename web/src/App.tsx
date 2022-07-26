import {
  Stack,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CookiesBar from './ui-library/components/CookiesBar'
import SectionOne from './ui-library/components/SectionOne'
import SectionTwo from './ui-library/components/SectionTwo'
import MainLayout from './ui-library/Layouts/MainLayout'
import PageLayout from './ui-library/Layouts/PageLayout'

type Props = {}

const App = (props: Props) => {

  useEffect(() => {
    function handleResize() {
      window.location.reload()
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <MainLayout>
      <PageLayout>
        <Stack>
          <SectionOne />
          <SectionTwo/>
          <CookiesBar />
        </Stack>
      </PageLayout>
    </MainLayout>
  )
}

export default App