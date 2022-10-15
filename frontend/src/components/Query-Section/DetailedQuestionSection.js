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
import theme from './theme'
import React from "react";
import Answer from "./Answer";


function DetailedQuestionSection() {
  return (
    <VStack alignItems="left">
      <Box  borderRadius="10" p={2} bgColor="#b6e7fc">
        <Heading fontSize='3xl' ml='2vh' mb='1vh'>Why there are so many cats in the IUT?</Heading>
        <Tag mY={1} variant="solid" bgColor='#083AA9' marginRight='2vh' ml='2vh'>
          TimeStamp
        </Tag>
        <Tag mY={1} variant="solid" bgColor='#083AA9'>
          Answers{" "}
        </Tag>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {/* <GridItem w='100%' h='10' bg='blue.500' />

  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}

        <GridItem colSpan={1} w="100%" bg="#c2fff0"  borderRadius="10">
          <Box >
            <Text ml='2vh'>Stats of the question</Text>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4} bg="#c2fff0"  borderRadius="10">
          <Box m={2} >
            <Heading as="h3" ml='2vh'>Description</Heading>

            <Text ml='2vh'> Brief description of the question</Text>
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default DetailedQuestionSection;
