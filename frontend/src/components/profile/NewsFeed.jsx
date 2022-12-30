import React from 'react'
import {
    Box,
    Grid,
    Image,
    GridItem,
    Heading,
    Text,
    Center,
    VStack,
    Button,
    HStack
  } from "@chakra-ui/react";
  import { useEffect,useState } from 'react';
  import { useAuth } from '../../Context/AuthContext';
  import axios from 'axios';
function NewsFeed({uid}) {
  //const interrersted = personalProjects.filter((project) => project.interested === true);
  const { currentUSer, setLoading, setAlert } = useAuth();
    const id = currentUSer.uid;
    console.log(id);
    const [requests, setRequests] = useState([]);
  console.log(uid);
    useEffect(() => {
        async function getRequests() {
            await axios

                .get(`/request/owner/${uid}`)
                .then((res) => {
                  console.log(res.data)
                    setRequests(res.data.data);
                })
                .catch((err) => console.log("The error: " + err.message));
        }
        getRequests();
    }, [id]);
    console.log(requests)
  return (
   <Box >
        <VStack>
            <Heading size="lg" p={2}>Responses</Heading>
            <Box>
                <VStack>
                   {requests.map(request => (
                  <Box ><Text size="lg">{request.title}</Text> Was Requested</Box>
                  ))
                  }
                </VStack>
            </Box>
        </VStack>
   </Box>
  )
}

export default NewsFeed