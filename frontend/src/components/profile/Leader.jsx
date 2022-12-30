import React from 'react'
import {
     VStack,
     HStack,
     Text,
     Center,
     Stack,
     Image,
     Badge,
     chakra,
     Code,
     ChakraProvider,
     Heading,
     Box,
     Table,
     TableCaption,
     Th,
     Tbody,
     Tr,
     Td,
     TableContainer,
     Thead,
     Tfoot,
    
   
   } from "@chakra-ui/react";
function Leader({user,pos}) {
  return (
    <Tr>
      <Td>{user.displayName}</Td>
        <Td>{pos}</Td>
        <Td isNumeric>{user.points}</Td>
      </Tr>
  )
}

export default Leader