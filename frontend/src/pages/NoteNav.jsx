import {
     Box,
     Flex,
     Heading,
    VStack,
    Button,Image,
     Text,
   } from "@chakra-ui/react";
   import React from "react";
   import { Link } from 'react-router-dom'
   
   function QuerNavSection({ questions }) {
     return (
       <Box  >
         <VStack width='50%' >
              <Button height='8vh' bgColor={'green.200'} _hover={{bg:'green.300'}}><Link to='/addnote'>Post a Note</Link></Button>
                <Image
                  src="/images/note.gif"
                  alt="s"
                  height="80vh"
                  sx={{ filter: "blur(0px)" }}
                /></VStack>
       </Box>
     );
   }
   
   export default QuerNavSection;