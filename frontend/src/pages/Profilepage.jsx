import { chakra,Box,Stack, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Icon,Container, Heading ,ChakraProvider, Center} from '@chakra-ui/react'
import React from 'react'

import { Layout } from '../components/ProLayout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'
import { useState } from 'react';
import { IconName } from "react-icons/fa";
import { AiFillStar } from "react-icons/md"


export default function Profilepage() {
  const { currentUSer, setLoading, setAlert } = useAuth()
  
  console.log(currentUSer)
  const [name, setName] = useState(currentUSer?.displayName);
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(currentUSer?.photoURL);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };
  

  
  return (
    <ChakraProvider theme={theme}>
    <Layout>
   
    <Stack direction={['column', 'row']} spacing='24px'>
    <Box w='25%' height='100vh' borderRadius='5' bg='#ADDDD0'>
    <Center margin='15px' fontSize='2xl' color='#425F57' marginBottom='40px'>User Details</Center>
          {/* {currentUSer && <pre> {JSON.stringify(currentUSer, null, 2)}</pre>} */}
          <VStack p={15}><p >Name : {currentUSer.displayName}</p>
          <p >Email : {currentUSer.email}</p>
          <p >Student ID : 190042118 </p>
          <p >Department : CSE</p>
          <p >Program : SWE</p>
          <p >Mobile No : 017********</p>
          </VStack>

    </Box>
  <Box w='40%'  borderRadius='5' bg='#B1E1FF'>
    <Center margin='15px' fontSize='2xl' color='#293462'>Current Activities</Center>
    <Center>What’s your idea? Get in touch. Always available for team project if the right project comes along.</Center>

  </Box>
  <VStack>
  <Box w='80vh' height='25vh'  borderRadius='5'  bg='#DFD3C3'>
  <Center margin='15px' fontSize='2xl' color='#665A48'>Reward Points

  </Center>
  
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