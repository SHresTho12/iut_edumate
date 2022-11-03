import { Center } from '@chakra-ui/react'
import React from 'react'
import Uploadbox from '../../components/fileshare/Uploadbox'
import { Layout } from '../../components/Layout'

function Upload() {
  return (
 <Layout><Center>
        <Uploadbox></Uploadbox>
    </Center></Layout>
    
  )
}

export default Upload