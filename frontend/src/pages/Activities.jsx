import { chakra,Input,Text,Box,Stack,List,
     ListItem,
     ListIcon,
     OrderedList,
     UnorderedList,Flex,Center,Image,Spacer, VStack,HStack, Avatar, AvatarBadge, AvatarGroup ,Container, Heading ,ChakraProvider, Button} from '@chakra-ui/react'
import React from 'react'
import art from "../components/art";
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'
import theme from './theme'
import Navlink from "./HomePagelink";
export default function Project() {
    
     return (
       <ChakraProvider theme={theme}>
       <Layout>
      
     <art/>
      
    
       </Layout>
       </ChakraProvider>
     )
   }