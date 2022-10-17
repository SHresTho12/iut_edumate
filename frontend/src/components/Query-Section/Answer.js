import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
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
        <Center marginBlockStart='3vh'>
        <Button m={2} bgColor="#083AA9" color='white' height='8vh' borderRadius='10px' _hover={{bg:'#052c82'}}>Post your answer</Button></Center>
        
        
   </Box>
  )
}

export default Answer
