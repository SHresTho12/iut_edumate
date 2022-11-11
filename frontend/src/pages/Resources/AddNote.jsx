import { Box,HStack, VStack,FormLabel,FormControl, Heading, Input, Badge, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import axios from "axios";
import ReactQuill from "react-quill";
import {useHistory} from 'react-router-dom'




import { useAuth } from "../../Context/AuthContext";
function AskQuestion() {

const { currentUSer, setAlert } = useAuth()
const [title,setTitle] = useState("")
const [body,setBody] = useState("")
const [tags,setTags] = useState([])
const [loading,setLoading] = useState(false);
const history = useHistory()
const handleQuill = (value) => {
  setBody(value);
  console.log(body);
};





const handleSubmit = async (e) => {
  e.preventDefault();

  if (title !== "" && body !== "") {
    setLoading(true);
    const bodyJSON = {
      title: title,
      body: body,
      
      user: currentUSer,
    };
    await axios
      .post("/notes", bodyJSON)
      .then((res) => {
        // console.log(res.data);
        alert("Note added successfully");
        setLoading(false);
        history.push("/academic");
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
          Create a Post for New Note
        </Heading>
        <VStack align="left">
          <Box m={3}>
            {/* <Heading my={2} size="md" align="left" color='#001D6E'>
              Title
            </Heading> */}
            <Badge my={2} marginBottom='2vh' p={2} fontSize='x-small' bgColor='#C4DDFF' color='#001D6E' borderRadius={5}>
              Enter a Short Description about the note you are posting
            </Badge>
           
               <Box m={3}>
          
           
              
              <Input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
                h='3.2rem'
                placeholder=' Title of the Notes'
              
                autoComplete=' '
               
               border='2px'
               borderColor='#2D6187'
              
               
              />
              
          </Box>
          <ReactQuill value={body} onChange={handleQuill} theme="snow"></ReactQuill>
              
          </Box>
          
          <Box mt="2" alignItems="left">
            <Heading m={3} size="md" align="left" color='#001D6E'>
              Select options
            </Heading>
            {/* //<ReactQuill className="react-quill" theme="snow" /> */}
            {/* <Editor></Editor> */}
            
            <Center marginBottom='3vh'>
            <HStack><Button>Department</Button><Button>Semester</Button><Button> Course</Button></HStack>
            
          </Center>
            <Button disabled={loading} type='submit' onClick={handleSubmit} bg="#4A47A3" m={2} color='#EDF7FA' height='9vh' fontSize='large' _hover={{ bg: "#192965" }}>
              {loading?'Adding Question .....' : 'Post Question '}
            </Button>
          </Box>
        
        </VStack>
      </Box>
    </Layout>
  );
}

export default AskQuestion;
