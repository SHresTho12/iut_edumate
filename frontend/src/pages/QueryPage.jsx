import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Container,
  Heading,
  ChakraProvider,
  Grid,
  GridItem,
  Image
} from "@chakra-ui/react";
import React, { useState,useEffect } from 'react'

import { Layout } from "../components/Layout";
import QuerNavSection from "../components/Query-Section/QuerNavSection";
import QueryFeed from "../components/Query-Section/QueryFeed";
import QueryHeader from "../components/Query-Section/QueryHeader";
import { useAuth } from "../Context/AuthContext";
import theme from "./theme";
import axios from 'axios'
export default function Profilepage() {
  const { currentUSer } = useAuth();
  const [questions,setQuestions] = React.useState([])
  useEffect(() => {
  async function getQuestion() {
    await axios.get("/askquestion").then((res) => {
      setQuestions(res.data.reverse());
      //console.log(res.data)
    });
  }
  getQuestion();
}, []);
  return (
    <Layout>
      <Box p={2} bgColor='#E6FFE6'>
        <QueryHeader></QueryHeader>
     

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <VStack>  <Image
            src="/images/ask1.gif"
            alt="s"
            borderRadius="10"
            sx={{ filter: "blur(0px)" }}
            marginBottom='3vh'
          />
          <GridItem bgColor='#E6FFE6' border="4px" borderColor='#4AA96C' width='45vh' colSpan={2} h="20%" borderRadius='8px'>
        
            <QuerNavSection questions={questions}></QuerNavSection>
        
          </GridItem>
          
       
          </VStack>
          <GridItem bgColor='#E6FFE6' colStart={3} border="4px" borderColor='#4AA96C' width='160vh' colEnd={6} borderRadius='8px'>
            <QueryFeed questions={questions}></QueryFeed>
            
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
}
