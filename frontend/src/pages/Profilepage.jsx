import { chakra,Box,Stack, VStack,HStack, Avatar, AvatarBadge,Divider, AvatarGroup ,Icon,Container, Heading ,ChakraProvider, Center} from '@chakra-ui/react'
import React from 'react'

import { Layout } from '../components/ProLayout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'
import { useState } from 'react';
import { IconName } from "react-icons/fa";
import { AiFillStar } from "react-icons/md"
import {FaTrophy} from "react-icons/fa";
import {BiUserCircle} from "react-icons/bi";

import currentActivities from './profile-section/currentActivities';



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
    <Box w='25%' height='100vh' borderRadius='5' border='4px' borderColor='#ADDDD0' bg='#d4fcf2'>
    <Center margin='15px' fontSize='2xl' color='#425F57' marginBottom='40px'><BiUserCircle fontSize='30px'/> User Details </Center>
          {/* {currentUSer && <pre> {JSON.stringify(currentUSer, null, 2)}</pre>} */}
          
          <VStack align='start' marginLeft='2vh' borderColor='#ADDDD0' marginRight='2vh'><p >Name : {currentUSer.displayName}</p>
          <Box border='2px' >Email : {currentUSer.email}</Box>
          <p >Student ID : 190042118 </p>
          <p >Department : CSE</p>
          <p >Program : SWE</p>
          <p >Mobile No : 017********</p>
         
      
          </VStack>

    </Box>
  <Box w='40%'  borderRadius='5' border='4px' borderColor='#B1E1FF' bg='#dbf1ff'>
    <Center margin='15px' fontSize='2xl' color='#293462'>Current Activities</Center>
    <Center ml='3.5vh'>What’s your idea? Get in touch. Always available for team project if the right project comes along.</Center>

  </Box>

  <VStack>
  <Box w='80vh' height='20vh'  borderRadius='5' border='4px' borderColor='#f5dbb5' bg='#fcf0de'>
  <Center margin='15px' fontSize='2xl' color='#544835' borderBottom='4px' borderColor='#8a6936'>Reward Points

  </Center>
  
  <Center  fontSize='2xl' > <FaTrophy/> <p margin='10vh'> Score: 8</p></Center>
  
    </Box>
    <Box w='80vh' height='80vh'  borderRadius='5' border='4px' borderColor='#D2DAFF' bg='#e8ecff'>
  <Center margin='15px' fontSize='2xl' color='#423b80'>Uploaded works</Center>
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