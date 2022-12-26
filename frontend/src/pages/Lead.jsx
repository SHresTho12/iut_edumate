import {
     VStack,
     HStack,
     Text,
     Center,
     Stack,
     Image,
     Badge,
     chakra,
     Code,
     ChakraProvider,
     Heading,
     Box,
     Table,
     TableCaption,
     Th,
     Tbody,
     Tr,
     Td,
     TableContainer,
     Thead,
     Tfoot,
    
   
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
   import Bg from "../components/coBg";
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
           <VStack spacing={2.5} color="green.500" marginBlockStart={'4vh'}>
            
           <Center  borderRadius={5} p={2}   color="#434242"
                  
                   bgColor="#FFF6BD"
                   size="md"
                   height="55px"
                   width="50vw"
                  
                  
                   ><HStack>
  
         <Text  fontSize="2xl"> Total Earned Points</Text>
         <Text  fontSize="2xl">30</Text>
         </HStack></Center>
             <Stack direction="row" gap={0} spacing={6} marginBlockStart='5vh'>
          

                  <TableContainer>
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th>Activity</Th>
        <Th>Timepstamp</Th>
        <Th isNumeric>earned Points</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td>Uploaded questions</Td>
        <Td>1 hours ago</Td>
        <Td isNumeric>5</Td>
      </Tr>
      <Tr>
        <Td>Uploaded notes</Td>
        <Td>2 hours ago</Td>
        <Td isNumeric>5</Td>
      </Tr>
      <Tr>
      <Td>Uploaded research paper</Td>
        <Td>1 hours ago</Td>
        <Td isNumeric>10</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
      <Td>Uploaded Lab Works</Td>
        <Td>4 hours ago</Td>
        <Td isNumeric>5</Td>
      </Tr>
      <Tr>
      <Td>Answered Query</Td>
        <Td>4 hours ago</Td>
        <Td isNumeric>5</Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
          
   
    
             </Stack>
          
        
        
           </VStack>
           
         </Layout>
   
       </ChakraProvider>
     );
   }
   