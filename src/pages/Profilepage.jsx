import { chakra,Box,Stack, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider, Center} from '@chakra-ui/react'
import React from 'react'

import { Layout } from '../components/ProLayout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'

export default function Profilepage() {
  const { currentUSer } = useAuth()
  console.log(currentUSer)
  return (
    <ChakraProvider theme={theme}>
    <Layout>
   
    <Stack direction={['column', 'row']} spacing='24px'>
    <Box w='25%' height='100vh' borderRadius='5' bg='#ADDDD0'>
    <Center margin='15px' fontSize='2xl' color='#425F57'>User Details</Center>
          {/* {currentUSer && <pre> {JSON.stringify(currentUSer, null, 2)}</pre>} */}
          <VStack><p>{currentUSer.displayName}</p>
          <p>{currentUSer.email}</p>
          </VStack>

    </Box>
  <Box w='40%'  borderRadius='5' bg='#B1E1FF'>
    <Center margin='15px' fontSize='2xl' color='#293462'>Current Activities</Center>
  </Box>
  <VStack>
  <Box w='80vh' height='25vh'  borderRadius='5'  bg='#DFD3C3'>
  <Center margin='15px' fontSize='2xl' color='#665A48'>Reward Points</Center>
    </Box>
    <Box w='80vh' height='75vh'  borderRadius='5'  bg='#D2DAFF'>
  <Center margin='15px' fontSize='2xl' color='#645CAA'>Uploaded works</Center>
    </Box>
    </VStack>
  

</Stack>
      <Container maxW='container.lg' overflowX='auto' py={4}>
      <chakra.pre p={4}>
          {/* {currentUSer && <pre> {JSON.stringify(currentUSer, null, 2)}</pre>} */}
          </chakra.pre>
      </Container>
   
    </Layout>
    </ChakraProvider>
  )
}