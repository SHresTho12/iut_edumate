import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Editor from './Editor';
import PostedAnswers from './PostedAnswers';

function Answer({id}) {
    let answerState = true;
    function myFunction() {
      answerState = false;
      console.log(answerState)
    }
  return (
   <Box m={2}>
        <Box>
        <Heading as='h3'> Answers</Heading>
        <PostedAnswers id={id}></PostedAnswers>
        </Box>
        <Text>Answer to the question</Text>
       
        { answerState && <Editor></Editor>}
        <Button m={2} bgColor="red.200">Post a answer</Button>
        
        
   </Box>
  )
}

export default Answer
