import {
  Box,
  ButtonGroup,
  Heading,
  VStack,
  Button,
  HStack,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Question() {
  return (
    <VStack alignItems="right" borderY="1px" m="2">
      <Link to="/question">Why are there too much cats in iut?</Link>

      <HStack>
        <Tag>CSE</Tag>
        <Tag>3-1</Tag>
        <Tag>Software Security</Tag>
        <Tag>CSE</Tag>
      </HStack>

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
      <Box>Top Answer</Box>
      <Box>Because it is a cat haven.</Box>
    </VStack>
  );
}

export default Question;
