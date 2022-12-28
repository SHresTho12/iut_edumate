import { Grid,VStack,Box,GridItem, Center, Heading,Text, Stack,Image,useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import NewsFeed from './NewsFeed'
import ResourceCard from './ResourceCard'

function Projects() {
  return (
   <Center  h="70vh" m={5} >
    <VStack>
    
    <Grid w="100%" templateColumns='repeat(5, 1fr)' gap='6'>
        <GridItem  border="2px" borderColor="white" colSpan={2}>
            <NewsFeed></NewsFeed>
        </GridItem>
        <GridItem h='auto'  colSpan={3}>
        <Heading p={2} m={5} >Available Resources</Heading>
           <Grid templateRows='repeat(2,1fr)' templateColumns='repeat(3, 1fr)' gap='6'>
           <ResourceCard/>
           <ResourceCard/>
           <ResourceCard/>
           <ResourceCard/>
           <ResourceCard/>
           <ResourceCard/>
           </Grid>
        </GridItem>
    </Grid>
    </VStack>

   </Center>

  )
}

export default Projects