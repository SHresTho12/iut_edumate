
import { Grid,VStack,Box,GridItem, Center, Heading,Text, Stack,Image,useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'
import NewsFeed from './NewsFeed'
import ProjectCards from './ProjectCards'

function Projects() {
  return (
   <Center  h="70vh" m={5} >
    <VStack>

    <Heading p={2} m={5} >Projects and Resources</Heading>
    <HStack m="10" p="10">
      <Button>
        <Link to='/requested'>Requested Resources</Link>
      </Button>
       <Button>
        <Link to="/requests">
          Help Others
        </Link>
      </Button>
    </HStack>

    <Grid w="100%" templateColumns='repeat(5, 1fr)' gap='6'>
        <GridItem  border="2px" borderColor="white" colSpan={2}>
            <NewsFeed></NewsFeed>
        </GridItem>
        <GridItem h='auto'  colSpan={3}>
        <Heading p={2} m={5} >Projects Ideas</Heading>
           <Grid templateRows='repeat(2,1fr)' templateColumns='repeat(3, 1fr)' gap='6'>
           <ProjectCards/>
           <ProjectCards/>
           <ProjectCards/>
           <ProjectCards/>
           <ProjectCards/>
           <ProjectCards/>
           </Grid>
        </GridItem>
    </Grid>
    </VStack>

   </Center>

  )
}

export default Projects