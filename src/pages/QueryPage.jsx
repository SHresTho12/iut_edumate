import { chakra,Box,Stack, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider} from '@chakra-ui/react'
import React from 'react'

import { Layout } from '../components/ProLayout'
import QueryHeader from '../components/Query-Section/QueryHeader'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'

export default function Profilepage() {
  const { currentUSer } = useAuth()
  console.log(currentUSer)
  return (
   
    <Layout>
   <QueryHeader></QueryHeader>
   
    </Layout>

  )
}