import { chakra,Box,Stack, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider} from '@chakra-ui/react'
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
    <Box w='200px' h='520px' borderRadius='8' bg='#ADDDD0'>
    
    </Box>
  <Box w='500px' h='520px' borderRadius='8' bg='#B1E1FF'>
    
  </Box>
  <Box w='500px'  h='520px' borderRadius='8'  bg='#B1E1FF'>
    
    </Box>
  

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