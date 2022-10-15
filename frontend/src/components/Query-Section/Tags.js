import {
  HStack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Center,
  ChakraProvider,
  
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import theme from './theme'

function Tags({handleTags}) {
  const [tags,setTags] = useState([]);
  function handleTagschild(tag){
  handleTags(tag);
  }
  return (
    <ChakraProvider theme={theme}>
    
    <HStack  >
    
      <Menu m={4} >
      
        <MenuButton width='40vh' as={Button} bgColor='#9BA3EB' _hover={{bg:'#8b92d3'}}>
          Department
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=> handleTagschild(' CSE ')}>CSE</MenuItem>
          <MenuItem onClick={() => handleTagschild('SWE ')}>SWE</MenuItem>
          <MenuItem onClick={() => handleTagschild('ME ')}>ME</MenuItem>
          <MenuItem onClick={() => handleTagschild('EEE ')}>EEE</MenuItem>
          <MenuItem onClick={() => handleTagschild('CEE ')}>CEE</MenuItem>
          <MenuItem onClick={() => handleTagschild('BTM ')}>BTM</MenuItem>
        </MenuList>
      </Menu>
      <Menu m={4}>
        <MenuButton  width='40vh' as={Button} bgColor='#80ED99' _hover={{bg:'#73D589'}}>
          Semester
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=> handleTagschild(' 1-1 ')}>1-1</MenuItem>
          <MenuItem onClick={()=> handleTagschild(' 1-2 ')}>1-2</MenuItem>
          <MenuItem onClick={()=> handleTagschild(' 2-1 ')}>2-1</MenuItem>
          <MenuItem onClick={()=> handleTagschild(' 2-2 ')}>2-2</MenuItem>
          <MenuItem>3-1</MenuItem>
          <MenuItem>3-2</MenuItem>
        </MenuList>
      </Menu>
      <Menu m={4}>
        <MenuButton width='40vh' as={Button} bgColor='#90E0EF' _hover={{bg:'#81C9D7'}}>
          Course
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=> handleTagschild(' SS ')}>Software-Security</MenuItem>
          <MenuItem onClick={()=> handleTagschild(' SP ')}>Server-Programming</MenuItem>
          <MenuItem onClick={()=> handleTagschild(' DP ')}>DP</MenuItem>
          <MenuItem onClick={()=> handleTagschild('LAB-SP ')}>Lab Server Program</MenuItem>
          <MenuItem>dummy</MenuItem>
        </MenuList>
       
      </Menu>
    </HStack>
    
    </ChakraProvider>
  );
}

export default Tags;
