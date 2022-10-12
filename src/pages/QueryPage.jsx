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
      <QueryHeader></QueryHeader>

      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem border="1px" colSpan={2} h='100%'><QuerNavSection></QuerNavSection></GridItem>
       <GridItem colStart={3} colEnd={6}><QueryFeed ></QueryFeed></GridItem> 
      </Grid>
    </Layout>
  );
}
