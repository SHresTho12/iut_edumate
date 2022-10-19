import { Grid,VStack,Box,GridItem, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import NewsFeed from './NewsFeed'
import ProjectCards from './ProjectCards'

function Projects() {
  return (
   <Center  h="70vh" m={5} >
    <VStack>
    <Heading p={2} m={5} >Projects and Resources</Heading>
    <Grid w="100%" templateColumns='repeat(5, 1fr)' gap='6'>
        <GridItem  border="2px" borderColor="white" colSpan={2}>
            <NewsFeed></NewsFeed>
        </GridItem>
        <GridItem h='auto'  colSpan={3}>
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