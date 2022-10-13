import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Editor from './Editor';

function Answer() {
    let answerState = true;
    function myFunction() {
      answerState = false;
      console.log(answerState)
    }
  return (
   <Box m={2}>
        <Heading as='h3'> Answers</Heading>
        <Text>Answer to the question</Text>
        <Button onClick={
          ()=>myFunction()
          
                    }>Post a answer</Button>
        { answerState && <Editor></Editor>}
        
        
   </Box>
  )
}

export default Answer
