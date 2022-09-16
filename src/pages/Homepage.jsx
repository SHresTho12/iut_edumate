import {
 VStack, Stack,Image,Badge,chakra,Code,ChakraProvider,Heading,List,ListItem,OrderedList,Tag,Text,Box,HStack,IconButton,Spacer,useColorMode,useColorModeValue,Grid, GridItem,Button,ButtonGroup
} from '@chakra-ui/react'

import React from 'react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/josefin-sans/700.css'
import '@fontsource/teko/700.css'
import theme from './theme'

// import iut from './iut.PNG';



import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { MdBuild , MdCall } from "react-icons/md"
var Blur = require('react-blur');



export default function Homepage() {


  return (
    <ChakraProvider theme={theme}>
    
    <Layout  >
    <VStack spacing={6} color="green.500">
      <Heading >Welcome to IUT Edumate!</Heading>
 


<Stack direction='row' gap ={7} spacing={6}>

<Button colorScheme='purple'   size="md"
  height="80px"
  width="225px"
  border="2px"
  borderColor="purple.500">
    Academic Resources
  </Button>
  <Button colorScheme='green'   size="md"
  height="80px"
  width="225px"
  border="2px"
  borderColor="green.500">
    Query section
  </Button>
  <Button colorScheme='blue'   size="md"
  height="80px"
  width="225px"
  border="2px"
  borderColor="blue.500">
   Project and Research
  </Button>
  <Button colorScheme='teal'   size="md"
  height="80px"
  width="225px"
  border="2px"
  borderColor="teal.500">
    Co-Curricular Activities
  </Button>
  {/* <Blur img='iut' blurRadius={5} enableStyles>
  The content.
</Blur> */}

</Stack>
<Image src="/images/iut.PNG" alt="s"  borderRadius="8" sx={{ filter: 'blur(0px)' }}/>

</VStack>
      
    </Layout>
    </ChakraProvider>
   
  
  )
}
