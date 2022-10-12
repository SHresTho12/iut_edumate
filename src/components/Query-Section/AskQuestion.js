import { Box, VStack, Heading, Input, Badge } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../ProLayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AskQuestion() {
  return (
    <Layout>
      <Heading align="center" m={4}>
        Post a new question
      </Heading>
      <Box p={10}>
        <VStack>
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
            ></Input>
          </Box>
          <Box>
            <Heading m={3} size="md" align="left">
              Description of the Question
            </Heading>
            <ReactQuill theme="snow" />
          </Box>
          <Box>
            <Heading m={3} size="md" align="left">
              Tags
            </Heading>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
}

export default AskQuestion;
