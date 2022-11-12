import { Center,Heading,VStack,Flex,Box, Button,ChakraProvider  } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Question from '../../components/Query-Section/Question'
import Notes from '../../components/Resources/Notes'
import { Layout } from '../../components/Layout'
import theme from "../theme";

function NotesFeed() {
   
    const [notes,setNotes] = useState([])
    useEffect(() => {
  async function getQuestion() {
    await axios.get("/notes").then((res) => {
      setNotes(res.data.reverse());
      console.log(res.data)
    });
  }
  getQuestion();
}, []);
console.log(notes)

  return (
    <ChakraProvider theme={theme}>
   
  <Box marginLeft={10} border="" >


       <Flex align="center" justify="center">
        <Heading as='h2' size='lg'  color='#00454A' shadow={'2xl'}>Available Notes</Heading>
        
       </Flex>
      
       {notes?.map((_q) => (
           <Box m={2}><Notes data={_q}></Notes>
           </Box>
           
        
          ))}
          
       
    </Box>
   

    </ChakraProvider>
  )
}

export default NotesFeed