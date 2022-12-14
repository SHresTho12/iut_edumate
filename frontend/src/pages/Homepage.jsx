import {
  VStack,
  Stack,
  Image,
  Badge,
  chakra,
  Code,
  ChakraProvider,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
 

  useBreakpointValue,
 
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import React from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/josefin-sans/700.css";
import "@fontsource/teko/700.css";
import theme from "./theme";
import Navlink from "./HomePagelink";
import { useAuth } from "../Context/AuthContext";
import CaptionCarousel from "./carousel";
import Background from "../components/Background";
import "../styles.css";
// import iut from './iut.PNG';

import { Layout } from "../components/Layout";
// import { Link } from 'react-router-dom'
import { MdBuild, MdCall } from "react-icons/md";
var Blur = require("react-blur");
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Homepage() {

  const { logout, currentUSer } = useAuth();
  

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <VStack spacing={2.5} color="green.500">
          <Heading>Welcome to IUT Edumate!</Heading>

          <Stack direction="row" gap={0} spacing={6}>
            {/* {currentUSer && <Navlink to='/profile' name='Profile' bgColor='white' colorScheme='green' />} */}
            <Navlink
              to="/academic"
              name="Academic Resources"
              colorScheme="white"
              _hover={{ bg: "purple.500" }}
              bgColor="purple.400"
              size="md"
              height="55px"
              width="200px"
              border="2px"
              borderColor="purple.300"
            />
          
              <Navlink
                to="/query"
                name="Query section"
                colorScheme="white"
                _hover={{ bg: "green.500" }}
                bgColor="green.400"
                size="md"
                height="55px"
                width="200px"
                border="2px"
                borderColor="green.400"
              />
          
            <Navlink
              to="/project"
              name="Project and Research"
              colorScheme="white"
              _hover={{ bg: "blue.500" }}
              bgColor="blue.400"
              size="md"
              height="55px"
              width="200px"
              border="2px"
              borderColor="blue.400"
            />
            <Navlink
              to="/co"
              name="Co-Curricular Activities"
              colorScheme="white"
              _hover={{ bg: "teal.500" }}
              bgColor="teal.400"
              size="md"
              height="55px"
              width="200px"
              border="2px"
              borderColor="teal.400"
            />

            {/* <Navlink to='/register' colorScheme='purple'   size="md" onClick={() => console.log("button clicked")}
  height="80px"
  width="225px"
  border="2px"
  borderColor="purple.500"
    name='Academic Resources' 
/>
  <Button colorScheme='green' size="md"
  height="80px"
  width="225px"
  border="2px"
  // Link to='/register'
  borderColor="green.500">
    Query section
  </Button>
  
 

  <Button colorScheme='blue'   size="md"
  height="80px"
  width="225px"
  border="2px"
  borderColor="blue.500">
   Project and Research
  </Button>
  <Button colorScheme='teal'   size="md"
  height="80px"
  width="225px"
  border="2px"
  borderColor="teal.500">
    Co-Curricular Activities
  </Button> */}
          </Stack>
          {/* <Image
            src="/images/iut7.jpg"
            alt="s"
            borderRadius="10"
            sx={{ filter: "blur(0px)" }}
          /> */}
          <Background />
     
        </VStack>
        
      </Layout>

    </ChakraProvider>
  );
}
