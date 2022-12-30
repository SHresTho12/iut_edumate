import {
  Box,
  Flex,
  Heading,
 
  Text,
} from "@chakra-ui/react";
import React from "react";

function QuerNavSection({ questions }) {
  return (
    <Box  >
     
      <Box>
        <Flex align="center" justify="center">
          <Heading as="h2" size="lg" marginBlockStart="1.5vh" color="#00454A">
            Information
          </Heading>
        
        </Flex>
        <Text m={4}>
          {" "}
          <p>{questions.length} questions</p>
        </Text>
      </Box>
    </Box>
  );
}

export default QuerNavSection;
