import {
  Box,
  ButtonGroup,
  Heading,
  VStack,
  Button,
  HStack,
  Tag,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import { FaThumbtack, FaTbZoomQuestion,FaExpandAlt } from "react-icons/fa";

import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import theme from "./theme";

function Question({ data }) {
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

  const tags = JSON.parse(data?.tags);
  //console.log(data)

  return (
    <ChakraProvider theme={theme}>
      <VStack alignItems="right"  m="2" color="#00454A" shadow={'2xl'} margin='20px'>
        <Box fontSize="x-large" bgColor="#affac9" borderRadius='5px' height={'7vh'} >
          <Link to={`/question?id=${data?._id}`} >{data?.title}</Link>
        </Box>
        <HStack>
          {tags.map((tag, index) => (
            <Tag key={index} size="sm" colorScheme="teal" variant="solid">
              {tag}
            </Tag>
          ))}

          {/* <Tag bgColor='#9BA3EB'>{tags}</Tag> */}
          {/* <Tag bgColor='#80ED99'>3-1</Tag>
        <Tag bgColor='#90E0EF'>Software Security</Tag> */}
        </HStack>
        <Box>
          <HStack align="flex-start" marginLeft="1vw">
           {/* <FaThumbtack />  */}
            <Box>
              <HStack>
                <Text borderRadius={5} p={2} bgColor="green.200">
                  Liked by : {data?.upvote}
                </Text>
                <Text borderRadius={5} p={2} bgColor="#CFD2CF">
                  Disliked by : {data?.downvote}
                </Text>
              </HStack>
            </Box>
          </HStack>
        </Box>

        <Heading size="sm" fontSize="small">
          Answers Pasted :{data?.answerDetails?.length}
        </Heading>

        
          <Button
            bgColor="#affac9"
            _hover={{ bg: "#73de98", color: "white", size:"large",fontSize:"large" }}
            size="md"
            marginLeft="1vw"
            marginBottom={'40vh'}
        
          >
            <Link to={`/question?id=${data?._id}` }>Expand The Question     .</Link><FaExpandAlt/>
          </Button>
        
      </VStack>
    </ChakraProvider>
  );
}

export default Question;
