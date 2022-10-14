import {
  Box,
  ButtonGroup,
  Heading,
  VStack,
  Button,
  HStack,
  Tag,
  ChakraProvider
  
} from "@chakra-ui/react";
import { FaThumbtack} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import theme from './theme'

function Question() {
  return (
    <ChakraProvider theme={theme} >
    <VStack alignItems="right" borderY="1px" m="2" color='#1C6758' >
    <Box fontSize='x-large' >
      <Link to="/question" >Why are there too much cats in iut?</Link>
</Box>   
      <HStack>
        <Tag>CSE</Tag>
        <Tag>3-1</Tag>
        <Tag>Software Security</Tag>
        <Tag>CSE</Tag>
      </HStack>
      <Box>
      <HStack align='flex-start'><FaThumbtack /> 
      <Heading fontSize='medium'>Top Answer</Heading>
      </HStack>
      </Box>
      <Box>Because it is a cat haven.</Box>
      <ButtonGroup m="2">
        <Button colorScheme="teal" size="md">
          Comment
        </Button>
        <Button colorScheme="teal" size="md">
          Upvote
        </Button>
        <Button colorScheme="red" size="md">
          Downvote
        </Button>
      </ButtonGroup>
    
    </VStack>
    </ChakraProvider>
  );
}

export default Question;
