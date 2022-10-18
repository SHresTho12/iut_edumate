import { Grid,Box, HStack, Icon,Text,Center } from '@chakra-ui/react'
import React from 'react'

import { FaGraduationCap,FaFileUpload,FaHandsHelping } from 'react-icons/fa';
function SiteStaus() {
  return (
<Center>  <Grid w="80%" color="white" p={10} templateColumns="repeat(3, 1fr)" gap={6}>
      <Center  borderRadius={5} p={2} bgColor="#4b4b4b"><HStack>
         <Icon color="green.200" w={20} h={20} as={FaGraduationCap}></Icon>
         <Text  fontSize="2xl">100+ Questions</Text>
         </HStack></Center>
      <Center  borderRadius={5} p={2} bgColor="#4b4b4b"><HStack>
         <Icon color="green.200" w={20} h={20} as={FaHandsHelping}></Icon>
         <Text  fontSize="2xl">100+ Answers</Text>
         </HStack></Center>
      <Center  borderRadius={5} p={2} bgColor="#4b4b4b"><HStack>
         <Icon color="green.200" w={20} h={12} as={FaFileUpload}></Icon>
         <Text  fontSize="2xl">100+ Resources</Text>
         </HStack></Center>
     
   </Grid></Center>
 

  )
}

export default SiteStaus