import { Box, VStack,FormLabel,FormControl, Heading, Input, Badge, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { Layout } from "../ProLayout";
import axios from "axios";
import ReactQuill from "react-quill";
import {useHistory} from 'react-router-dom'
import "react-quill/dist/quill.snow.css";
import Tags from "./Tags";
import "../../Css/Query-Section-Css/addquestion.css";
import Editor from "./Editor";
import { useAuth } from "../../Context/AuthContext";
function AskQuestion() {

const { currentUSer, setLoading, setAlert } = useAuth()
const [title,setTitle] = useState("")
const [body,setBody] = useState("")
const [tags,setTags] = useState([])

const history = useHistory()
const handleQuill = (value) => {
  setBody(value);
  console.log(body);
};



function handleTags(tag){
  setTags([...tags,tag])
  console.log(tags)
}

const handleSubmit = async (e) => {
  e.preventDefault();

  if (title !== "" && body !== "") {
    const bodyJSON = {
      title: title,
      body: body,
      tag: JSON.stringify(tags),
      user: currentUSer,
    };
    await axios
      .post("/askquestion", bodyJSON)
      .then((res) => {
        // console.log(res.data);
        alert("Question added successfully");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

  return (
    <Layout>
      <Box
        p={10}
      
        align="center"
        borderColor="teal"
        borderRadius="10"
        boxShadow="inner"
        bgColor="#DFF6FF"
      >
        <Heading align="center" m={2} color='#001D6E'>
          Post a new question
        </Heading>
        <VStack align="left">
          <Box m={3}>
            {/* <Heading my={2} size="md" align="left" color='#001D6E'>
              Title
            </Heading> */}
            <Badge my={2} marginBottom='2vh' p={2} fontSize='x-small' bgColor='#C4DDFF' color='#001D6E' borderRadius={5}>
              Be specific with the question and try to keep the title short
            </Badge>
           
              
              <Input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
                h='3.2rem'
                placeholder=' Title of the Question'
              
                autoComplete=' '
               
               border='2px'
               borderColor='#2D6187'
              
               
              />
              
          </Box>
          
          <Box mt="2" alignItems="left">
            <Heading m={3} size="md" align="left" color='#001D6E'>
              Description of the Question
            </Heading>
            {/* //<ReactQuill className="react-quill" theme="snow" /> */}
            {/* <Editor></Editor> */}
            <ReactQuill value={body} onChange={handleQuill} theme="snow"></ReactQuill>
            <Box marginBottom='3vh'>
            <Heading m={3} size="md" align="left">
              <Center color='#001D6E'>Tags:{tags}</Center>
            </Heading>
            <Center><Tags handleTags={handleTags}></Tags></Center>
          </Box>
            <Button type='submit' onClick={handleSubmit} bg="#4A47A3" m={2} color='#EDF7FA' height='9vh' fontSize='large' _hover={{ bg: "#192965" }}>
              Post Question
            </Button>
          </Box>
        
        </VStack>
      </Box>
    </Layout>
  );
}

export default AskQuestion;
