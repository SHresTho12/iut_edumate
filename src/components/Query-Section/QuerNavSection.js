import { Box,Menu,MenuItem,MenuList,MenuButton,Button } from '@chakra-ui/react'
import React from 'react'

function QuerNavSection() {
  return (
   <Box  borderColor='gray.900'>

<Menu m={4}>
  <MenuButton m={4} as={Button} >
   Department
  </MenuButton>
  <MenuList>
    <MenuItem>CSE</MenuItem>
    <MenuItem>CEE</MenuItem>
    <MenuItem>EEE</MenuItem>
    <MenuItem>ME</MenuItem>
    <MenuItem>IPE</MenuItem>
    <MenuItem>BTM</MenuItem>
  </MenuList>
</Menu>
<Menu m={4}>
  <MenuButton m={4} as={Button} >
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





   </Box>
  )
}

export default QuerNavSection