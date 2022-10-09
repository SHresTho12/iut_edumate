import { chakra,Input,Text,Box,Stack,List,
     ListItem,
     ListIcon,
     OrderedList,
     UnorderedList,Flex,Center,Spacer, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider, Button} from '@chakra-ui/react'
import React from 'react'
import Contact from "../components/Contact";
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'

function Feature({ title, desc, ...rest }) {
     return (
       <Box p={4}  shadow='md' borderWidth='1px' {...rest}>
         <Heading fontSize='xl'>{title}</Heading>
         <Text mt={4}>{desc}</Text>
       </Box>
     )
   }

export default function Project() {
  const { currentUSer } = useAuth()
  console.log(currentUSer)
  return (
    <ChakraProvider theme={theme}>
    <Layout>
   
    <Center mb={5} bg='#B4CDE6' h='50px' color='#182747'  fontSize='2xl' borderRadius={8}>
 Explore your interests here!
</Center>

<Stack spacing={8} direction='row'>
      <Feature 
        
        title='Uploaded Project Ideas'
       

      />
       
      <Feature
        title='Uploaded Research Paper'
  
       
      />

      <Contact />
    </Stack>
   
 
    </Layout>
    </ChakraProvider>
  )
}