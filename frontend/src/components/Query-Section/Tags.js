import {
  HStack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Tags() {
  return (
    <HStack>
      <Menu m={4}>
        <MenuButton m={4} as={Button}>
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
        <MenuButton m={4} as={Button}>
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
        <MenuButton m={4} as={Button}>
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
  );
}

export default Tags;
