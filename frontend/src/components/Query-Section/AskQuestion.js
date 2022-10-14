import { Box, VStack,FormLabel,FormControl, Heading, Input, Badge, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../ProLayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Tags from "./Tags";
import "../../Css/Query-Section-Css/addquestion.css";
import Editor from "./Editor";
function AskQuestion() {
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
            <Editor></Editor>
            <Box marginBottom='3vh'>
            <Heading m={3} size="md" align="left">
              <Center color='#001D6E'>Tags</Center>
            </Heading>
            <Center><Tags></Tags></Center>
          </Box>
            <Button bg="#4A47A3" m={2} color='#EDF7FA' height='9vh' fontSize='large'>
              Post Question
            </Button>
          </Box>
        
        </VStack>
      </Box>
    </Layout>
  );
}

export default AskQuestion;
