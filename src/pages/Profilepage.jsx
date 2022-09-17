import { chakra, Container, Heading ,ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'

export default function Profilepage() {
  const { currentUSer } = useAuth()
  console.log(currentUSer)
  return (
    <ChakraProvider theme={theme}>
    <Layout>
      <Heading>Profile page</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
      <chakra.pre p={4}>
          {currentUSer && <pre> {JSON.stringify(currentUSer, null, 2)}</pre>}
          </chakra.pre>
      </Container>
    </Layout>
    </ChakraProvider>
  )
}