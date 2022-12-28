import React from 'react'
import {Box, Card, Flex, Heading, Text } from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
import UploadRequestCard from '../../components/fileshare/UploadRequestCard';
function Requests() {
    const { currentUSer, setLoading, setAlert } = useAuth();
    const id = currentUSer.uid;
    const [requests, setRequests] = useState([]);
    //get request with user id
    useEffect(() => {
        async function getRequests() {
            await axios

                .get(`/request/owner/${id}`)
                .then((res) => {
                  
                    setRequests(res.data.data);
                })
                .catch((err) => console.log("The error: " + err.message));
        }
        getRequests();
    }, [id]);
  return (
    <Layout>
       <Box>
    {requests.map(request => (
        <UploadRequestCard request={request} upload={true}/>
    ))}
  </Box>
    </Layout>
  )
}

export default Requests