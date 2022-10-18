import {
  Heading,
  HStack,
  VStack,
  Box,
  Tag,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import React from "react";
import parse from 'html-react-parser';
import Answer from "./Answer";


function DetailedQuestionSection({question}) {
  //console.log(question);
  //const body = question.body;
  //console.log(body);
  return (
    
    <VStack alignItems="left">

      <Box border="1px" borderRadius="10px" p={2} bgColor="#C8FFD4" marginBlockStart={'10vh'}>
        <Heading>Title : </Heading>
        <Tag mY={1} variant="solid" colorScheme="teal">
         {/* {question.created_at} */}

        </Tag>
        <Tag mY={1} variant="solid" colorScheme="teal">
          Answers count: 

        </Tag>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {/* <GridItem w='100%' h='10' bg='blue.500' />

  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}


        <GridItem colSpan={1} w="100%" bg="blue.100" border="1px solid" borderRadius="5">

          <Box >
            <Text size="sm">Information</Text>
            <VStack>
              <Text fontSize="sm">Posted by : 
</Text>
            </VStack>

          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4} bg="#b0ffec"  borderRadius="10" shadow={'2xl'}>
          <Box m={2} >
            <Heading as="h3" ml='2vh'>Description</Heading>


            <Text> </Text>

          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default DetailedQuestionSection;
