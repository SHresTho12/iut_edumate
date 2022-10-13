import { Box, VStack, Heading, Input, Badge, Button } from "@chakra-ui/react";
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
        border="1px"
        align="center"
        borderColor="teal"
        borderRadius="10"
        boxShadow="inner"
        bgColor="teal.50"
      >
        <Heading align="center" m={2} color='#967E76'>
          Post a new question
        </Heading>
        <VStack align="left">
          <Box m={3}>
            <Heading my={2} size="md" align="left">
              Title
            </Heading>
            <Badge my={2} p={1} fontSize="sm" color="green" borderRadius={10}>
              Be specific with the question and try to keep the title short
            </Badge>
            <Input
              htmlSize={100}
              size="lg"
              placeholder="Title of the question "
              border="2px"
              bgColor="teal.100"
            ></Input>
          </Box>
          <Box mt="2" alignItems="left">
            <Heading m={3} size="md" align="left">
              Description of the Question
            </Heading>
            {/* //<ReactQuill className="react-quill" theme="snow" /> */}
            <Editor></Editor>
            <Button bg="orange.200" m={2}>
              Post Question
            </Button>
          </Box>
          <Box>
            <Heading m={3} size="md" align="left">
              Tags
            </Heading>
            <Tags></Tags>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
}

export default AskQuestion;
