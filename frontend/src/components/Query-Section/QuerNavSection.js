import { Box,Menu,MenuItem,MenuList,MenuButton,Button,VStack ,Flex,Heading} from '@chakra-ui/react'
import React from 'react'

function QuerNavSection() {
  return (
   <Box >
    <Flex align="center" justify="center">
        <Heading as='h2' size='lg' color="#576F72">Filter your search </Heading>
       </Flex>
   <VStack m={5} >

   <Menu  >
      
      <MenuButton width='30vh'height='8vh' as={Button} bgColor='#9BA3EB' _hover={{bg:'#8b92d3'}}>
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
      <MenuButton  width='30vh'height='8vh' as={Button} bgColor='#80ED99' _hover={{bg:'#73D589'}}>
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
      <MenuButton width='30vh' height='8vh' as={Button} bgColor='#90E0EF' _hover={{bg:'#81C9D7'}}>
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


</VStack>


   </Box>
  )
}

export default QuerNavSection