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
import React from "react";

import { Layout } from "../components/ProLayout";
import QuerNavSection from "../components/Query-Section/QuerNavSection";
import QueryFeed from "../components/Query-Section/QueryFeed";
import QueryHeader from "../components/Query-Section/QueryHeader";
import { useAuth } from "../Context/AuthContext";
import theme from "./theme";

export default function Profilepage() {
  const { currentUSer } = useAuth();
  console.log(currentUSer);
  return (
    <Layout>
      <Box h="100vh" p={2} bgColor='#E6FFE6'>
        <QueryHeader></QueryHeader>
     

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <VStack>  <Image
            src="/images/ask1.gif"
            alt="s"
            borderRadius="10"
            sx={{ filter: "blur(0px)" }}
            marginBottom='3vh'
          />
          <GridItem border="4px" borderColor='#4AA96C' width='45vh' colSpan={2} h="100%" borderRadius='8px'>
        
            <QuerNavSection></QuerNavSection>
        
          </GridItem>
          
       
          </VStack>
          <GridItem colStart={3} border="4px" borderColor='#4AA96C' width='155vh' colEnd={6} borderRadius='8px'>
            <QueryFeed></QueryFeed>
            
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
}
