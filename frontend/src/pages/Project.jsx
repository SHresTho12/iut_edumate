import { chakra,Input,Text,Box,Stack,List,
     ListItem,
     ListIcon,
     OrderedList,
     UnorderedList,Flex,Center,Image,Spacer, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider, Button} from '@chakra-ui/react'
import React from 'react'
import Contact from "../components/Contact";
import { Layout } from '../components/Layout'
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectFeed from '../components/Projects/ProjectFeed';
import { useAuth } from '../Context/AuthContext'
import { useState, useEffect} from 'react'
import axios from 'axios';
import theme from './theme'
import { Link } from 'react-router-dom';

function Feature({ title, desc, img,...rest }) {





     return (
       <Box p={4}  shadow='lg' borderWidth='2px' borderColor='#9CC094' {...rest} maxHeight='160%'>
         <Heading fontSize='xl'>{title}</Heading>
         <Text mt={4}>{desc}</Text>
       </Box>
     )
   }

export default function Project() {
  const { currentUSer } = useAuth()

   const [projects , setProjects] = useState([]);
    //get all the projects from the database
    useEffect(() => {
  async function getUser() {
    await axios.get(`/project`).then((res) => {
      setProjects(res.data);
      console.log("hi",res.data.reverse());
    });
  }
  getUser();
},[])
  return (
    <ChakraProvider theme={theme}>
    <Layout>
   
    <Center mb={5} bg='#B4CDE6' h='50px' color='#182747'  fontSize='2xl' borderRadius={8}>
 Explore your interests here!
</Center>

<Stack spacing={8} direction='row' >
   <HStack>
<VStack>
<Image
            src="/images/idea.gif"
            alt="s"
            height='20%'
            sx={{ filter: "blur(0px)" }}
          />
   

      <Box p={4}  shadow='lg' borderWidth='2px' borderColor='#9CC094'  Height='160%'>
         <Heading fontSize='xl'>Uploaded Project Ideas</Heading>
         <Text mt={4}>1. What’s your idea? Get in touch. Always available for
            team project if the right project comes along.</Text>
            <Text mt={4}>1. What’s your idea? Get in touch. Always available for
            team project if the right project comes along.</Text>
       </Box>
      </VStack>
      <VStack>
      
      <Image
            src="/images/Documents.gif"
            alt="s"
            height='20%'
            sx={{ filter: "blur(0px)" }}
          />
      <Box p={4}  shadow='lg' borderWidth='2px' borderColor='#9CC094'  Height='160%'>
         <Heading fontSize='xl'>Uploaded Research Papers</Heading>
         <Text mt={4}>1. What’s your idea? Get in touch. Always available for
            team project if the right project comes along.</Text>
            <Text mt={4}>1. What’s your idea? Get in touch. Always available for
            team project if the right project comes along.</Text>
       </Box>
       
      </VStack>
       </HStack>
       <Button> <Link to="/projectsFeed">See All the projects</Link></Button>
        <Contact />
   
   
    
    
     
    </Stack>
  
   
 
    </Layout>
    </ChakraProvider>
  )
}