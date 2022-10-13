import { Heading, HStack, VStack,Box } from '@chakra-ui/react'
import React from 'react'
import Answer from './Answer'

function DetailedQuestionSection() {
  return (
   < VStack alignItems='left'>
  <Box>
  <Heading>Title of the question</Heading>
  

  </Box>
   <HStack>
        <Box>Stats of the question</Box>
        <Box>Brief description of the question</Box>
   </HStack>
   
   </VStack>
  )
}

export default DetailedQuestionSection