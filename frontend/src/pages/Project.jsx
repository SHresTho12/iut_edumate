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

  
  return (
    <ChakraProvider theme={theme}>
    <Layout>
   
    <Center mb={5} bg='#B4CDE6' h='50px' color='#182747'  fontSize='2xl' borderRadius={8}>
 Explore your interests here!
</Center>

<Stack spacing={8} direction='row' >
   <HStack>
<VStack>
<Button fontSize={'20px'} bgColor='#B4CDE6' _hover={{bg:'#93bce6'}}> <Link to="/projectsFeed">Show All the projects</Link></Button>
<Image
            src="/images/idea.gif"
            alt="s"
            height='20%'
            sx={{ filter: "blur(0px)" }}
          />
   

   
      </VStack>
      <VStack>
      
    
       
      </VStack>
       </HStack>
       
        <Contact />
   
   
    
    
     
    </Stack>
  
   
 
    </Layout>
    </ChakraProvider>
  )
}