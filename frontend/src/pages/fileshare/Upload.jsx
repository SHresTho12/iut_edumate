import { Center,VStack,Image, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Uploadbox from '../../components/fileshare/Uploadbox'
import { Layout } from '../../components/Layout'
import theme from '../theme'
import { useAuth } from '../../Context/AuthContext';

function Upload() {
  //get the id from the parameters
  let search = window.location.search;
    const params = new URLSearchParams(search);
   const id = params.get("id");
   const { currentUSer } = useAuth();
   const userUid = currentUSer.uid;
  return (

    <ChakraProvider theme={theme}>
   <Layout>
     <VStack alignItems='center' justifyContent='center' height='100vh'>
     <Image
            src="/images/upload.jpg"
            alt="s"
         
            sx={{ filter: "blur(0px)" }}
            width='20%'
        
            
          />
        <Uploadbox id={id} uid={userUid}></Uploadbox>
        </VStack>
   </Layout>
   </ChakraProvider>

    
  )
}

export default Upload