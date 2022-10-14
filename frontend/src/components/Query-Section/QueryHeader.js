import {
  Button,
  Input,
  VStack,
  HStack,
  IconButton,
  Flex,
  Spacer,
  Heading,
  Box,
  Image
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Navlink from "../Navlink";
import { useAuth } from "../../Context/AuthContext";
function QueryHeader() {
  const { logout, currentUSer } = useAuth();

  return (
    <Flex m={3} minWidth="max-content" alignItems="center" gap="2">
      {currentUSer && (
        <Navlink
          to="/askquestion"
          name="Ask Question"
          bgColor="teal"
          color="white"
        />
        
      )}
    
      <Spacer />
      <Heading as="h3" size="lg">
        Questions and Answers
      </Heading>

      <Spacer />

<HStack>
<FaSearch/> <Input bgColor="#C8FFD4" htmlSize={35} width="auto" placeholder="Search  Any Query"></Input> 
      <Button colorScheme="teal" size="md">
        Search
      </Button>
      </HStack>
    </Flex>
  );
}

export default QueryHeader;
