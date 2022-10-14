import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Question from './Question'

function QueryFeed() {
  return (
    <Box border="">


       <Flex align="center" justify="center">
        <Heading as='h2' size='lg' color="#576F72">Query Feed</Heading>
       </Flex>
       <Question></Question>
    </Box>
  )
}

export default QueryFeed