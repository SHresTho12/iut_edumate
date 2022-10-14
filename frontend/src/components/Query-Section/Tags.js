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
import theme from './theme'

function Tags() {
  return (
    <ChakraProvider theme={theme}>
    
    <HStack  >
    
      <Menu m={4} >
      
        <MenuButton width='40vh' as={Button} bgColor='#9BA3EB'>
          Department
        </MenuButton>
        <MenuList>
          <MenuItem>CSE</MenuItem>
          <MenuItem>SWE</MenuItem>
          <MenuItem>ME</MenuItem>
          <MenuItem>EEE</MenuItem>
          <MenuItem>CEE</MenuItem>
          <MenuItem>BTM</MenuItem>
        </MenuList>
      </Menu>
      <Menu m={4}>
        <MenuButton  width='40vh' as={Button} bgColor='#80ED99'>
          Semester
        </MenuButton>
        <MenuList>
          <MenuItem>1-1</MenuItem>
          <MenuItem>1-2</MenuItem>
          <MenuItem>2-1</MenuItem>
          <MenuItem>2-2</MenuItem>
          <MenuItem>3-1</MenuItem>
          <MenuItem>3-2</MenuItem>
        </MenuList>
      </Menu>
      <Menu m={4}>
        <MenuButton width='40vh' as={Button} bgColor='#90E0EF'>
          Course
        </MenuButton>
        <MenuList>
          <MenuItem>Software-Security</MenuItem>
          <MenuItem>Server-Programming</MenuItem>
          <MenuItem>DP</MenuItem>
          <MenuItem>Lab</MenuItem>
          <MenuItem>dummy</MenuItem>
        </MenuList>
       
      </Menu>
    </HStack>
    
    </ChakraProvider>
  );
}

export default Tags;
