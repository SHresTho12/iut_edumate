import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Heading,VStack,Tag,HStack,Box,Text,Button,Center } from '@chakra-ui/react'
import { FaThumbtack, FaTbZoomQuestion,FaExpandAlt } from "react-icons/fa";
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext'
import ProjectCard from './ProjectCard';
import {Layout} from '../Layout'
function ProjectFeed() {
    const { currentUSer } = useAuth();
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
const handleIupdate = async() => {
     await axios.get(`/project`).then((res) => {
      setProjects(res.data);
      console.log("hi",res.data.reverse());
    });

};

//interested people in the project put request
  const handleInterested = async (id) => {
    const bodyJSON = {
      user: currentUSer,
    };
    
    await axios

      .put(`/project/interested/${id}`, bodyJSON)
      .then((res) => {
       
        handleIupdate();
      })
      .catch((err) => alert(" Already interested"));
      
  };

        
  return (
   <Layout>
   <Center> <Heading>Available Projects</Heading></Center>
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
                  Interested : {project?.interested.length}
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
            onClick={() => handleInterested(project._id)}
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