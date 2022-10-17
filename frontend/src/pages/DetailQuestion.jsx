import React, { useState,useEffect} from 'react'
import { Layout } from '../components/Layout'
import Answer from '../components/Query-Section/Answer'
import DetailedQuestionSection from '../components/Query-Section/DetailedQuestionSection'
import axios from 'axios'
import parse from 'html-react-parser';
import {
  Heading,
  HStack,
  VStack,
  Box,
  Tag,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
function DetailQuestion() {
  const [questionData, setQuestionData] = useState();



  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  console.log(id);
  
  let quesArray ;
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  useEffect(() => {
    async function getFunctionDetails() {
      console.log("I am being called")
      await axios
        .get(`/askquestion/${id}`)
        .then((res) => {
          
          
          console.log(res.data);
          setQuestionData(res.data[0])})
        .catch((err) => console.log("The error: " + err.message));
    }
    getFunctionDetails();
  }, []);

  console.log(questionData);

  // async function getFunctionDetails() {
  //       console.log("I am being called")
  //       await axios
  //         .get(`/askquestion/${id}`)
  //         .then((res) => {
            
            
  //           console.log(res.data[0]);
  //           quesArray = res.data[0];
       
  //           //setQuestionData(res.data[0])})
  //         })
  //         .catch((err) => console.log("The error: " + err.message));
  //     }
  // getFunctionDetails();
  //console.log("Hello " + quesArray);


  return (
    
    <Layout>
        <VStack alignItems="left">
      <Box border="1px" borderRadius="10" p={2} bgColor="teal.100">
        <Heading>Title :{questionData?.title}</Heading>
        <Tag mY={1} variant="solid" colorScheme="teal">
         {questionData?.created_at}
        </Tag>
        <Tag mY={1} variant="solid" colorScheme="teal">
          Answers count: {questionData?.answerDetails.length}
        </Tag>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {/* <GridItem w='100%' h='10' bg='blue.500' />

  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}

        <GridItem colSpan={1} w="100%" bg="blue.100" border="1px solid" borderRadius="5">
          <Box >
            <Text size="sm">Information</Text>
            <VStack>
              <Text fontSize="sm">Posted by : {questionData?.user.displayName}</Text>

            </VStack>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4} bg="blue.100" border="1px solid" borderRadius="10">
          <Box m={2} >
            <Heading as="h3">Description</Heading>

            <Text> {parse(`${questionData?.body}`)}</Text>
          </Box>
        </GridItem>
      </Grid>
    </VStack>
        <Answer></Answer>
    </Layout>
  )
}

export default DetailQuestion