import { Button, Input, VStack,HStack,IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa';
function QueryHeader() {
  return (
    <HStack>

<Input placeholder='Search  Any Query' ></Input>
<Button colorScheme='teal' size='md'>Search</Button>

    </HStack>
  
  )
}

export default QueryHeader