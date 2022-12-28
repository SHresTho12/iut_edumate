import React from 'react'
import { Layout } from '../../components/Layout'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useEffect,useState } from 'react';
import axios from 'axios';
function Download() {

    let search = window.location.search;
    const params = new URLSearchParams(search);
   const id = params.get("id");
    //const id ='a1705d30-864b-41f9-beb5-88e058d10fe0'
    const [file , setFile] = useState();
    console.log(id);
   useEffect(() => {
    async function getFileDetails() {
      await axios
        .get(`/file/show/${id}`)
        .then((res) => {
          console.log(res.data);
          setFile(res.data[0]);
        })
        .catch((err) => console.log("The error: " + err.message));
    }
    getFileDetails();
  }, [id]);

console.log(file);

//get request for a file information





    console.log(id);
    const handleDownload = () => {
        console.log('download')
    }

  return (
   <Layout>
     <Flex alignItems='center' justifyContent='center' height='100vh'>
      <Button onClick={handleDownload}>
        <Text fontSize='lg'>Download file</Text>
      </Button>
    </Flex>
   </Layout>
  )
}

export default Download