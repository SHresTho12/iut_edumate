import { Grid, Box, HStack, Icon, Text, Center } from "@chakra-ui/react";
import React from "react";

import {
  FaGraduationCap,
  FaArrowUp,
  FaFileUpload,
  FaHandsHelping,
  FaQuestion
} from "react-icons/fa";
function SiteStaus({personalQuestions}) {
  return (
    <Center>
      {" "}
      <Grid
        w="80%"
        color="white"
        p={10}
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={12} as={FaFileUpload}></Icon>
            <Text fontSize="xl">10+ resource post</Text>
          </HStack>
        </Center>
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={20} as={FaHandsHelping}></Icon>
            <Text fontSize="xl">20 Answers</Text>
          </HStack>
        </Center>
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={12} as={FaQuestion}></Icon>
            <Text fontSize="xl">{personalQuestions?.length} Questions</Text>
          </HStack>
        </Center>
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={12} as={FaArrowUp}></Icon>
            <Text fontSize="xl">100 Points</Text>
          </HStack>
        </Center>
      </Grid>
    </Center>
  );
}

export default SiteStaus;
