import React from 'react'
import { Layout } from '../../components/Layout'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
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
                  
                    setRequests(res.data);
                })
                .catch((err) => console.log("The error: " + err.message));
        }
        getRequests();
    }, [id]);
    console.log(requests);


  return (
    <Layout>
        Requested
    </Layout>
  )
}

export default Requested