import React from 'react'
import {
    Box,
    Grid,
    Image,
    GridItem,
    Heading,
    Text,
    Center,
    VStack,
    Button,
    HStack,
    ChakraProvider
  } from "@chakra-ui/react";
  import theme from '../../pages/theme'
function NewsFeed() {
  return (
    <ChakraProvider theme={theme}>
   <Box >
        <VStack>
            <Heading size="lg" p={2}>Reponses</Heading>
            <Box>
                <VStack>
                    <Box p={5} border="1px solid green">Labiba fariha was interested in project 1</Box>
                    <Box p={5} border="1px solid green">Abir MAhmud wants to team up</Box>
                    <Box border="1px solid green"></Box>
                </VStack>
            </Box>
        </VStack>
   </Box>
   </ChakraProvider>
  )
}

export default NewsFeed