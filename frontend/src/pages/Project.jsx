import { chakra,Input,Text,Box,Stack,List,
     ListItem,
     ListIcon,
     OrderedList,
     UnorderedList,Flex,Center,Image,Spacer, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider, Button} from '@chakra-ui/react'
import React from 'react'
import Contact from "../components/Contact";
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'

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
  console.log(currentUSer)
  return (
    <ChakraProvider theme={theme}>
    <Layout>
   
    <Center mb={5} bg='#B4CDE6' h='50px' color='#182747'  fontSize='2xl' borderRadius={8}>
 Explore your interests here!
</Center>

<Stack spacing={8} direction='row' >
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

      <Contact />
    </Stack>
   
 
    </Layout>
    </ChakraProvider>
  )
}