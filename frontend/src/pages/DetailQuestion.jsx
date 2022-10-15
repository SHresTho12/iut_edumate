import {
  Box,
  ButtonGroup,
  Heading,
  VStack,
  Button,
  HStack,
  Tag,
  Image,
  ChakraProvider
  
} from "@chakra-ui/react";
import React from 'react'
import { Layout } from '../components/Layout'
import Answer from '../components/Query-Section/Answer'
import DetailedQuestionSection from '../components/Query-Section/DetailedQuestionSection'
import detailedQuesTheme from './detailedQuesTheme'
function DetailQuestion() {
  return (
    
    <ChakraProvider theme={detailedQuesTheme} >
   
    <Layout>
    <HStack >
    <Image
            src="/images/Questions.gif"
            alt="s"
            borderRadius="10"
            sx={{ filter: "blur(0px)" }}
            width='40%'
          />
          <VStack width='130vh'>
        <DetailedQuestionSection ></DetailedQuestionSection>
        <Answer></Answer>
        </VStack>
        </HStack>
    </Layout>
    
    </ChakraProvider>
    
  )
}

export default DetailQuestion