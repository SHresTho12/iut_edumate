import React from 'react'
import { Box, Card, Flex, Heading, Text,Image, HStack } from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
import RequestCard from '../../components/fileshare/RequestCard';
function Requested() {
    
    const { currentUSer, setLoading, setAlert } = useAuth();
    const id = currentUSer.uid;
    const [requests, setRequests] = useState([]);
    //get request with user id
    useEffect(() => {
        async function getRequests() {
            await axios

                .get(`/request/user/${id}`)
                .then((res) => {
                  
                    setRequests(res.data.data);
                })
                .catch((err) => console.log("The error: " + err.message));
        }
        getRequests();
    }, [id]);
    console.log(requests);


  return (
    <Layout>
    <HStack>
       <Image
            src="/images/req.jpg"
            alt="s"
           
            sx={{ filter: "blur(0px)" }}
            width='50vw'
       
            
          />
        <Box width="60%"> 
    {requests.map(request => (
        <RequestCard request={request} upload={false} />
    ))}
  </Box>
  </HStack>
    </Layout>
  )
}

export default Requested