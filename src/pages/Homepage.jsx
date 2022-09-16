import {
  Stack,Badge,chakra,Code,Heading,List,ListItem,OrderedList,Tag,Text,Box,HStack,IconButton,Spacer,useColorMode,useColorModeValue,Grid, GridItem,Button,ButtonGroup
} from '@chakra-ui/react'

import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { MdBuild , MdCall } from "react-icons/md"


export default function Homepage() {
  return (
    <Layout>
      <Heading>Home page</Heading>
      {/* <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'75px 1fr 30px'}
  gridTemplateColumns={'350px 8fr'}
  h='200px'
  gap='2'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Academic Resources
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Project and Research
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
  Query section
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Co-Curricular Activities
  </GridItem>
</Grid> */}


<Stack direction='row' spacing={4}>
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
  

</Stack>
      
    </Layout>
  
  )
}
