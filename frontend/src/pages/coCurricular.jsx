import {
     VStack,
     Stack,
     Image,
     Badge,
     chakra,
     Code,
     ChakraProvider,
     Heading,
   
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
           <VStack spacing={2.5} color="green.500">
            
   
             <Stack direction="row" gap={0} spacing={6} marginBlockStart='5vh'>
               {/* {currentUSer && <Navlink to='/profile' name='Profile' bgColor='white' colorScheme='green' />} */}
               <Navlink
                 to="/register"
                 name="Entertainment"
                 colorScheme="white"
                 _hover={{ bg: "purple.500" }}
                 bgColor="purple.400"
                 size="md"
                 height="55px"
                 width="30vw"
                 border="2px"
                 borderColor="purple.300"
               />
             
                 <Navlink
                   to="/query"
                   name="Matches and Tournament"
                   colorScheme="white"
                   _hover={{ bg: "green.500" }}
                   bgColor="green.400"
                   size="md"
                   height="55px"
                   width="30vw"
                   border="2px"
                   borderColor="green.400"
                 />
             
               <Navlink
                 to="/project"
                 name="Upcoming Competitions"
                 colorScheme="white"
                 _hover={{ bg: "blue.500" }}
                 bgColor="blue.400"
                 size="md"
                 height="55px"
                 width="30vw"
                 border="2px"
                 borderColor="blue.400"
               />
          
   
    
             </Stack>
          
             <Bg />
        
           </VStack>
           
         </Layout>
   
       </ChakraProvider>
     );
   }
   