
import React, { useState,useEffect} from 'react'
import { Layout } from '../components/Layout'
import Answer from '../components/Query-Section/Answer'
import DetailedQuestionSection from '../components/Query-Section/DetailedQuestionSection'
import axios from 'axios'
import parse from 'html-react-parser';
import { useAuth } from '../Context/AuthContext'
import ReactQuill from "react-quill";
import theme from './theme'
import {
  Heading,
  HStack,
  VStack,
  Box,
  Stack,
  Tag,
  Text,
  Grid,
  GridItem,
  Button,
  Input,
  ChakraProvider
} from "@chakra-ui/react";
import Comment from '../components/Query-Section/Comment'
import PostedAnswers from '../components/Query-Section/PostedAnswers'

function DetailQuestion() {
  const [questionData, setQuestionData] = useState();
  const { currentUSer } = useAuth()


  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  console.log(id);
  
  let quesArray ;
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);


  const handleQuill = (value) => {
    setAnswer(value);
  };


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
  }, [id]);

  console.log(questionData);

  async function getUpdatedAnswer() {
    await axios
      .get(`/askquestion/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  const handleSubmit = async () => {
    const body = {
      question_id: id,
      answer: answer,
      user: currentUSer,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/answer", body, config)
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };
  


  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
        user: currentUSer,
      };
      await axios.post(`/comment/${id}`, body).then((res) => {
        setComment("");
        setShow(false);
        getUpdatedAnswer();
        // console.log(res.data);
      });
    }
  }

  // const handleUpvoote = async () => {
  //   const user = currentUSer;
  //   await axios.put(`/upvote/${id}`).then((res) => {
  //     getUpdatedAnswer();
  //   });
  // };
//axios put function to handle upvote for question
  const handleUpvote = async () => {
    const bodyJSON = {
      
      user: currentUSer.uid,
    };
    await axios.put(`/askquestion/upvote/${id}`,bodyJSON).then((res) => {
      getUpdatedAnswer();
    });
  };

  const handleDownvote = async () => {
    const bodyJSON = {
      
      user: currentUSer.uid,
    };
    await axios.put(`/askquestion/downvote/${id}`,bodyJSON).then((res) => {
      getUpdatedAnswer();
    });
  };

  return (
    <ChakraProvider theme={theme}>

    
    <Layout>
  
      <Box >
      <VStack alignItems="left">
      <Box  p={3} bgColor="#C8FFD4" borderRadius='10px'  marginBottom={'1.5vh'} marginBlockStart='3vh' shadow={'2xl'}>
        <Heading>Title :{questionData?.title}</Heading>
        <Tag mY={1} variant="solid" colorScheme="teal" marginRight={'1vw'}>
         {new Date(questionData?.created_at).toLocaleString()}
        </Tag>
        <Tag mY={1} variant="solid" colorScheme="teal">
          Answers count: {questionData?.answerDetails.length}
        </Tag>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {/* <GridItem w='100%' h='10' bg='blue.500' />

  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}

        <GridItem colSpan={1} w="100%" bg="blue.100"  borderRadius="10px" shadow={'2xl'} >
          <Box p={2} >
            <Text size="sm" marginLeft='1vw' marginBlockStart={'1vh'}>Information</Text>
            <VStack>
              <Text fontSize="sm">Posted by : {questionData?.user.displayName}</Text>
              <Text fontSize="sm">Liked by : {questionData?.upvote}</Text>
              <Text fontSize="sm">Disliked by : {questionData?.downvote}</Text>
                <HStack m={2}> 
                <Button onClick={handleUpvote} bgColor="green">Up vote</Button>
                <Button onClick={handleDownvote} bgColor="red">Down vote</Button>
                </HStack>
            </VStack>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4} bg="blue.100" shadow={'2xl'}  borderRadius="10px">
          <Box m={2} >
            <Heading as="h3" fontSize={'30px'}>Description</Heading>

            <Text> {parse(`${questionData?.body}`)}</Text>
          </Box>
        </GridItem>
      </Grid>
    </VStack>
   
    <Box m={2} bgColor='#D2DAFF' marginBlockStart={'1.5vw'} borderRadius='10px' boxShadow={'2xl'}>
    <Box >
    <Heading as='h2' marginLeft={'1vw'} fontSize={'30px'}> Comments</Heading>
    <Box p={2}  borderRadius="10">
    <Grid templateColumns="repeat(5, 1fr)" gap={0}>
    <GridItem p={2} colSpan={1} w="100%"  borderRight="1px solid" borderRadius="1">
      <Box >
        <Text >Stats of the question</Text>
        <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                        boxShadow:"2xl"
                      }}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
        <Button onClick={handleComment} m={2} bgColor="#9c99ff" color={'white'} _hover={{bg:'#8e8bfc'}}>Comment</Button>
      </Box>
    </GridItem>
    



             
    <GridItem p={2} w="100%" colSpan={4}  >


      {
        questionData?.comments &&
        questionData?.comments.map((_qd) => (
          <Box key={_qd?._id}>
            {_qd.comment}{" "}
            <br></br>
            <span>
              
              - {_qd.user ? _qd.user.displayName : "Nate Eldredge"}
            </span>{" "}
            {"    "}
            <small>
              {new Date(_qd.created_at).toLocaleString()}
            </small>
          </Box> ))
      }
     
    </GridItem>
  </Grid>
</Box>
    </Box>
    
   
    
    
</Box>
 
    <Box m={2}>
        <Box>
        <Heading as='h3' marginBlockStart={'4vh'} marginLeft='1vw' fontSize={'30px'}> Answers</Heading>
        <Box p={2} bg="#FAFCDB" borderRadius="10px" boxShadow={'2xl'}>
        {questionData?.answerDetails.map((_q,index) => (

            <Grid templateColumns="repeat(5, 1fr)" gap={0}>
        <GridItem colSpan={1} w="100%"  borderRight="1px solid" borderRadius="1">
          <Box >
            <Text>Info</Text>
            <Text fontSize="sm">Posted by : {_q.user.displayName}</Text>
           <small>{ new Date(_q.created_at).toLocaleString()}</small>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4}  >
          <Box m={2} >
            <Heading as='h6' size="md">Answer No {index+1}</Heading>

            <Text>                   {parse(_q.answer)}</Text>
          </Box>
        </GridItem>
      </Grid>
          ))


        }
    </Box>
        </Box>
        <Text marginBlockStart={'4vh'} fontFamily='heading' fontSize={'30px'}>Answer to the question</Text>
       
        <ReactQuill value={answer}
          onChange={handleQuill} theme="snow"></ReactQuill>
        <Button onClick={handleSubmit} m={2} bgColor="#5782BB" color={'white'}>Post your answer</Button>
        
        
   </Box>
 
       
      </Box>

    </Layout>
    </ChakraProvider>
    
   
    
  )
}

export default DetailQuestion