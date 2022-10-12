import { Box, VStack, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../ProLayout";

function AskQuestion() {
  return (
    <Layout>
      <VStack>
        <Box>
          <Heading m={4}>Title of the question</Heading>
          <Input size="lg" placeholder="title"></Input>
        </Box>
      </VStack>
    </Layout>
  );
}

export default AskQuestion;
