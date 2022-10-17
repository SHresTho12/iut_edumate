import React from 'react'
import { Box, Button, Heading, Text,Grid,GridItem, Input } from '@chakra-ui/react'
import DetailedComment from './DetailedComment'


function Comment() {
  return (
    <Box m={2}>
    <Box>
    <Heading as='h5'> Comments</Heading>
   <DetailedComment></DetailedComment>
    </Box>
    
   
    
    
</Box>
  )
}

export default Comment