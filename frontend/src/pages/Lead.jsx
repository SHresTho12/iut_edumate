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
   import React, { useState,useEffect } from "react";
   import axios from "axios";
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
    const [userList , setUserList] = useState([]);
    const { currentUSer } = useAuth();
    
    //get the user data
    //const points = user.points;
    //axios call to get the user data
    useEffect(() => {
        axios.get('/leaderboard')
            .then(res => {
                setUserList(res.data.data);
                
            })
            .catch(err => console.log(err));
    }, []);

const uid = currentUSer.uid;

    //finst the user in the list
    const user = userList.find((user) => user.fireuid === uid);
    //get the position of the user
    const pos = userList.indexOf(user) + 1;
    
   
     
     
   
     return (
       <ChakraProvider theme={theme}>
         <Layout>
          <Center><VStack><Heading><Text fontSize="4xl">Your Position: {pos}</Text></Heading>
            <Heading><Text fontSize="3xl">Your Points: {user?.points}</Text></Heading></VStack>
            
            </Center>
        
           <HStack><Image
            src="/images/lead.jpg"
            alt="s"
           
            sx={{ filter: "blur(0px)" }}
            width='50vw'
          //   border='8px' 
          //   borderRightColor='#5FF194'
          //   borderLeftColor='white'
          //   borderBottomColor='white'
          //   borderBlockStartColor='white'
            
          />
              <VStack spacing={2.5} color="green.500" marginBlockStart={'1vh'}>
           <Center  borderRadius={5} p={2}   color="#434242"
                  
                   bgColor="#FFF6BD"
                   size="md"
                   height="55px"
                   width="100%"
                  
                  
                   >
                    
                    <HStack>
                    
            
           

         <Text  fontSize="2xl"> Leader Board</Text>
         
         </HStack></Center>
             <Stack direction="row" gap={0} spacing={6} marginBlockStart='5vh'>
          

                  <TableContainer>
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Position</Th>
        <Th isNumeric>earned Points</Th>
      </Tr>
    </Thead>
    <Tbody>
      {userList.map((user, index) => (
        <Tr>
          <Td>{user.name}</Td>
          <Td>{index + 1}</Td>
          <Td isNumeric>{user.points}</Td>
        </Tr>
      ))}

      
    </Tbody>
    
  </Table>
</TableContainer>
          
   
    
             </Stack>
             </VStack>
             </HStack>
        
        
          
           
         </Layout>
   
       </ChakraProvider>
     );
   }
   