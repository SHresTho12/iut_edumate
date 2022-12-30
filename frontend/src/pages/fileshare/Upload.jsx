import { Center } from '@chakra-ui/react'
import React from 'react'
import Uploadbox from '../../components/fileshare/Uploadbox'
import { Layout } from '../../components/Layout'
import { useAuth } from '../../Context/AuthContext';
function Upload() {
  //get the id from the parameters
  let search = window.location.search;
    const params = new URLSearchParams(search);
   const id = params.get("id");
   const { currentUSer } = useAuth();
   const userUid = currentUSer.uid;
  return (
 <Layout><Center>
        <Uploadbox id={id} uid={userUid}></Uploadbox>
    </Center></Layout>
    
  )
}

export default Upload