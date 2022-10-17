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
import { FaThumbtack,FaTbZoomQuestion} from "react-icons/fa";

import React from "react";
import { Link } from "react-router-dom";
import theme from './theme'

function Question({data}) {
const tags = JSON.parse(data?.tags)
//console.log(data)
  return (
    <ChakraProvider theme={theme} >
    <VStack alignItems="right" borderY="1px" m="2" color='#00454A' >
    <Box fontSize='x-large' >
    
      <Link to={`/question?id=${data?._id}`} >{data?.title}</Link>
</Box>   
      <HStack>

      {
        tags.map((tag,index)=>(
          <Tag key={index} size="sm" colorScheme="teal" variant="solid">
          {tag}
        </Tag>
        ))
      }


        {/* <Tag bgColor='#9BA3EB'>{tags}</Tag> */}
        {/* <Tag bgColor='#80ED99'>3-1</Tag>
        <Tag bgColor='#90E0EF'>Software Security</Tag> */}
       
      </HStack>
      <Box>
      <HStack align='flex-start'><FaThumbtack /> 
      <Heading fontSize='medium'>Top Answer</Heading>
      </HStack>
      </Box>
      <Heading size="sm" fontSize='small'>Answers Pasted :{data?.answerDetails?.length}</Heading>
      <Box>Because it is a cat haven.</Box>
      <ButtonGroup m="2">
      
        <Button bgColor='#14C38E' _hover={{bg:'#10a377'}} size="md">
          Upvote
        </Button>
        <Button bgColor='#E26868'_hover={{bg:'#b54a4a'}}  size="md">
          Downvote
        </Button>
      </ButtonGroup>
    
    </VStack>
    </ChakraProvider>
  );
}

export default Question;
