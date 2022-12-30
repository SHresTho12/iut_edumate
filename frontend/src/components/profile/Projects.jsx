
import { Grid,VStack,Box,GridItem, Center, Heading,Text, Stack,Image,useColorModeValue,HStack,Button } from '@chakra-ui/react'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsFeed from './NewsFeed'
import ProjectCards from './ProjectCards'
import { Layout } from '../../components/Layout'
import { useAuth } from '../../Context/AuthContext'
import axios from 'axios'
function Projects() {
  const [personalProjects , setPersonalProjects] = React.useState([])
  const {currentUSer} = useAuth()
  const uid = currentUSer ? currentUSer.uid : "";
  console.log(uid);
//get all projects
useEffect(() => {
  async function getProjects() {
    await axios
      .get(`/project/${uid}`)
      .then((res) => {
        setPersonalProjects(res.data);
      })
      .catch((err) => console.log("The error: " + err.message));
  }
  getProjects();
}, []);
console.log(personalProjects)



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
            {personalProjects.map((project) => (
              <ProjectCards project={project} />
            ))}
            
           </Grid>
        </GridItem>
    </Grid>
    </VStack>

   </Center>
   

  )
}

export default Projects