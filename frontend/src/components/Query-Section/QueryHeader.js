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
import { FaSearch,FaCommentsQuestion } from "react-icons/fa";
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
          bgColor="#4AA96C"
          color="white"
          _hover={{bg:'#3B8756'}}
        />
        
      )}
    
      <Spacer />
      <Heading as="h3" size="lg" color='#00454A'>
        Questions and Answers
      </Heading>

      <Spacer />

{/* <HStack>
<FaSearch/> <Input bgColor="#FFFFFF" htmlSize={35} width="auto" placeholder="Search  Any Query" border={'2px'} shadow='lg' borderColor='#5782BB'></Input> 
      <Button bgColor='#90E0EF' size="md" color='#0F3460' _hover={{bg:'#73B3BF'}}>
        Search
      </Button>
      </HStack> */}
    </Flex>
  );
}

export default QueryHeader;
