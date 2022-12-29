import { Center,VStack,Image, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Uploadbox from '../../components/fileshare/Uploadbox'
import { Layout } from '../../components/Layout'
import theme from '../theme'

function Upload() {
  //get the id from the parameters
  let search = window.location.search;
    const params = new URLSearchParams(search);
   const id = params.get("id");
  return (
    <ChakraProvider theme={theme}>
   <Layout>
     <VStack alignItems='center' justifyContent='center' height='100vh'>
     <Image
            src="/images/up.jpg"
            alt="s"
           
            sx={{ filter: "blur(0px)" }}
            width='40vw'
        
            
          />
        <Uploadbox id={id}></Uploadbox>
        </VStack>
   </Layout>
   </ChakraProvider>
    
  )
}

export default Upload