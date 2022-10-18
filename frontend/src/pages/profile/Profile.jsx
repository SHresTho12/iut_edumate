import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from '../../components/profile/Banner'
import Projects from '../../components/profile/Projects'
import SiteStaus from '../../components/profile/SiteStaus'
import { Layout } from '../../components/ProLayout'
function Profile() {
  return (
    <Layout><Box >
         <Banner></Banner>
          <SiteStaus></SiteStaus>
          <Projects></Projects>
    </Box>
         
    </Layout>
  
  )
}

export default Profile