import { Grid,Box, HStack, Icon,Text,Center } from '@chakra-ui/react'
import React from 'react'

import { FaGraduationCap,FaFileUpload,FaHandsHelping } from 'react-icons/fa';
function SiteStaus() {
  return (
<Center>  <Grid w="80%" color="white" p={10} templateColumns="repeat(3, 1fr)" gap={6}>
      <Center  borderRadius={5} p={2} bgColor="#4b4b4b"><HStack>
         <Icon color="green" w={20} h={20} as={FaGraduationCap}></Icon>
         <Text  fontSize="2xl">100+ Questions</Text>
         </HStack></Center>
      <Center  borderRadius={5} p={2} bgColor="#4b4b4b"><HStack>
         <Icon color="green" w={20} h={20} as={FaHandsHelping}></Icon>
         <Text  fontSize="2xl">100+ Answers</Text>
         </HStack></Center>
      <Center  borderRadius={5} p={2} bgColor="#4b4b4b"><HStack>
         <Icon color="green" w={20} h={12} as={FaFileUpload}></Icon>
         <Text  fontSize="2xl">100+ Resources</Text>
         </HStack></Center>
     
   </Grid></Center>
 
//     <section class="count">

//    <div class="box-container">

//       <div class="box">
//          <i class="fas fa-graduation-cap"></i>
//          <div class="content">
//             <h3>150+</h3>
//             <p>courses</p>
//          </div>
//       </div>

//       <div class="box">
//          <i class="fas fa-user-graduate"></i>
//          <div class="content">
//             <h3>1300+</h3>
//             <p>students</p>
//          </div>
//       </div>

//       <div class="box">
//          <i class="fas fa-chalkboard-user"></i>
//          <div class="content">
//             <h3>80+</h3>
//             <p>teachers</p>
//          </div>
//       </div>

//       <div class="box">
//          <i class="fas fa-face-smile"></i>
//          <div class="content">
//             <h3>100%</h3>
//             <p>satisfaction</p>
//          </div>
//       </div>

//    </div>

// </section>
  )
}

export default SiteStaus