import { Center } from '@chakra-ui/react'
import React from 'react'
import Uploadbox from '../../components/fileshare/Uploadbox'
import { Layout } from '../../components/Layout'

function Upload() {
  //get the id from the parameters
  let search = window.location.search;
    const params = new URLSearchParams(search);
   const id = params.get("id");
  return (
 <Layout><Center>
        <Uploadbox id={id}></Uploadbox>
    </Center></Layout>
    
  )
}

export default Upload