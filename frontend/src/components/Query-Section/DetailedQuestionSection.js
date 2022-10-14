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
import Answer from "./Answer";

function DetailedQuestionSection() {
  return (
    <VStack alignItems="left">
      <Box border="1px" borderRadius="10" p={2} bgColor="teal.100">
        <Heading>Why there are so many cats in the IUT?</Heading>
        <Tag mY={1} variant="solid" colorScheme="teal">
          TimeStamp
        </Tag>
        <Tag mY={1} variant="solid" colorScheme="teal">
          Answers{" "}
        </Tag>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {/* <GridItem w='100%' h='10' bg='blue.500' />

  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}

        <GridItem colSpan={1} w="100%" bg="blue.100" border="1px solid" borderRadius="10">
          <Box >
            <Text>Stats of the question</Text>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4} bg="blue.100" border="1px solid" borderRadius="10">
          <Box m={2} >
            <Heading as="h3">Description</Heading>

            <Text> Brief description of the question</Text>
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default DetailedQuestionSection;
