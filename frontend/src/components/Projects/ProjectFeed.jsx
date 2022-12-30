import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Heading,VStack,Tag,HStack,Box,Text,Button } from '@chakra-ui/react'
import { FaThumbtack, FaTbZoomQuestion,FaExpandAlt } from "react-icons/fa";
import axios from 'axios';
import ProjectCard from './ProjectCard';
import {Layout} from '../Layout'
function ProjectFeed() {
    const [projects , setProjects] = useState([]);
    //get all the projects from the database
    useEffect(() => {
  async function getUser() {
    await axios.get(`/project`).then((res) => {
      setProjects(res.data);
      console.log("hi",res.data.reverse());
    });
  }
  getUser();
},[])
        
  return (
   <Layout>
    <Heading>Available Projects</Heading>
        {projects.map((project) => (

        <VStack borderRadius={5} bgColor="#F3F1F5" p={3} alignItems="right"  m="2" color="#00454A" shadow={'2xl'} margin='20px'>
        <Box p={4} fontSize="x-large" bgColor="#affac9" borderRadius='5px' height={'7vh'} >
          <Link  to={'/home'} >{project?.projectname}</Link>
        </Box>
       

        <Box>
          <HStack align="flex-start" marginLeft="1vw">
           {/* <FaThumbtack />  */}
            <Box>
              <HStack>
                <Text borderRadius={5} p={2} bgColor="green.200">
                  Liked by : {project?.upvote}
                </Text>
                <Text borderRadius={5} p={2} bgColor="red.100">
                  Disliked by : {project?.downvote}
                </Text>
              </HStack>
            </Box>
          </HStack>
        </Box>

        <Text size="md" fontSize="small">
          Project Description : {project?.projectdescription}
        </Text>

        
          <Button
            bgColor="#affac9"
            _hover={{ bg: "#73de98", color: "white", size:"large",fontSize:"large" }}
            size="md"
            marginLeft="1vw"
            marginBottom={'40vh'}
        
          >
            Interested <FaExpandAlt/>
          </Button>
        
      </VStack>

            )
        )}
    
   </Layout>
    
  )
}

export default ProjectFeed