import {
  Button,
  Input,
  VStack,
  HStack,
  IconButton,
  Flex,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
function QueryHeader() {
  return (
  
      <Flex m={3} minWidth='max-content' alignItems='center' gap='2'>
         <Button colorScheme="teal" size="md">Ask a Question</Button>
         <Spacer/>
         <Heading as='h3' size='lg'>Questions and Answers</Heading>
        
      <Spacer/>
       
        <Input
          htmlSize={35}
          width="auto"
          placeholder="Search  Any Query"
        ></Input>
        <Button colorScheme="teal" size="md">
          Search
        </Button>
      </Flex>
    
  );
}

export default QueryHeader;
