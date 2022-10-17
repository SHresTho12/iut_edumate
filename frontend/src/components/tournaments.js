import {
     Box,
     Center,
     useColorModeValue,
     Heading,
     Text,
     Stack,
     Image,
     Button,
     ChakraProvider,
     Menu,
     MenuButton,
     MenuList,
     MenuItem,
     MenuItemOption,
     MenuGroup,
     MenuOptionGroup,
     MenuDivider,
   } from '@chakra-ui/react';
   import { Layout } from '../components/Layout'
   import theme from '../pages/theme'
   import {BsCaretDown} from "react-icons/bs";
   import { useState } from "react";
import { useDateSelect } from "react-ymd-date-select";

   
   
   const IMAGE =
     '/images/art.jpg';
     const IMAGE1 =
     '/images/photo.jpg';
     const IMAGE2 =
     '/images/pub.jpg';
   
   export default function Art() {
     return (
          <ChakraProvider theme={theme}>
          <Layout>

       <Center py={12}>
       <Menu>
  <MenuButton as={Button} rightIcon={<BsCaretDown />}>
   Select your Game
  </MenuButton>
  <MenuList>
    <MenuItem>Cricket</MenuItem>
    <MenuItem>Football</MenuItem>
    <MenuItem>Basketball</MenuItem>
    <MenuItem>Badminton</MenuItem>
    <MenuItem>Volleyball</MenuItem>
  </MenuList>
</Menu>
       </Center>
       </Layout>
       </ChakraProvider>
     );
   }