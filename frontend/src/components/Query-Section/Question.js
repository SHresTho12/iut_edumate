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

import React, { useState, useEffect,useMemo } from "react";
import { Link } from "react-router-dom";
import theme from './theme'


function Question({data}) {
  const itemLimit = 3;
  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [curPage, setCurPage] = useState(0);
  const handlePageChange = (page) => {
    setCurPage(page);
  };
  
  useEffect(() => {
    const pagesTotal = Math.ceil(data.length / itemLimit);

    setPagesQuantity(pagesTotal);
  }, [data.length]);

  return (
    <ChakraProvider theme={theme} >
    <VStack alignItems="right" borderY="1px" m="2" color='#00454A' >
    <Box fontSize='x-large' marginLeft='1vw'>
    
      <Link to="/question" >{data?.title} </Link>
</Box>   
      <HStack>
        <Tag bgColor='#9BA3EB'  marginLeft='1vw'>CSE</Tag>
        <Tag bgColor='#80ED99'  marginLeft='1vw'>3-1</Tag>
        <Tag bgColor='#90E0EF'  marginLeft='1vw'>Software Security</Tag>
       
      </HStack>
      <Box>
      <HStack align='flex-start'  marginLeft='1vw'><FaThumbtack /> 
      <Heading fontSize='medium'  marginLeft='1vw'>Top Answer</Heading>
      </HStack>
      </Box>
      <Box  marginLeft='2vw'>Because it is a cat haven.</Box>
      <ButtonGroup m="2">
      
        <Button bgColor='#14C38E' _hover={{bg:'#10a377'}} size="md"  marginLeft='1vw'>
          Upvote
        </Button>
        <Button bgColor='#E26868'_hover={{bg:'#b54a4a'}}  size="md"  marginLeft='1vw'>
          Downvote
        </Button>
      </ButtonGroup>
    
    </VStack>
    </ChakraProvider>
  );
}

export default Question;
