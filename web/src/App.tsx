import {
  Stack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CookiesBar from './ui-library/components/CookiesBar'
import Footer from './ui-library/components/Footer'
import NavBar from './ui-library/components/NavBar'
import SectionFour from './ui-library/components/SectionFour'
import SectionOne from './ui-library/components/SectionOne'
import SectionThree from './ui-library/components/SectionThree'
import SectionTwo from './ui-library/components/SectionTwo'
import MainLayout from './ui-library/Layouts/MainLayout'
import PageLayout from './ui-library/Layouts/PageLayout'

type Props = {}

const App = (props: Props) => {
  const [link, setLink] = useState<string>('')

  const changeLink = (newLink: string) => {
    setLink(newLink)
  }

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
          <NavBar
            changeLink={changeLink}
            link={link}
          />
          <SectionOne
            changeLink={changeLink}
          />
          <SectionTwo
            changeLink={changeLink}
          />
          <SectionThree
            changeLink={changeLink}
          />
          <SectionFour
            changeLink={changeLink}
          />
          <CookiesBar />
          <Footer />
        </Stack>
      </PageLayout>
    </MainLayout>
  )
}

export default App