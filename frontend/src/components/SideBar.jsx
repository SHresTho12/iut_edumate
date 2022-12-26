import {
  Input,

  useDisclosure,

  ChakraProvider,
  
  HStack,

  Button, 
  Center,
  FormControl,
  FormLabel,
  Stack,
  VStack,Image
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import {useHistory} from 'react-router-dom'
import axios from "axios";
import { Layout } from '../components/Layout'
import Navlink from './Navlink'
import theme from '../pages/theme'
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const {  currentUSer } = useAuth()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
   const [studentid, setStudentid] = useState('');
   const [departmentname, setDepartmentname] = useState('');
   const [program, setProgram] = useState('');
  const history = useHistory()
console.log(currentUSer)
  const [loading,setLoading] = useState(false);
  const id = currentUSer.uid;
  const handleSubmit = async (e) => {
   
   
   if (currentUSer) {
     setLoading(true);
     const bodyJSON = {
    fireuid : currentUSer.uid,
    name:name,
    email:currentUSer.email,
    department: departmentname,
    program: program,
    studentid:studentid,
    user: currentUSer
     };
     await axios
       .put(`/user/update/${id}`, bodyJSON)
       .then((res) => {
         // console.log(res.data);
         alert("User Updated");
         setLoading(false);
         history.push("/profile");
       })
       .catch((err) => {
         console.log(err);
         alert(err.message);
       });
   }
 };





 
  return (
    <ChakraProvider theme={theme}>
    <Layout  >

  
  
      <Stack spacing='8'>
      <HStack>
      <Image
         src="/images/update.svg"
         alt="s"
        
         sx={{ filter: "blur(0px)" }}
         width='50vw'
         border='8px' 
         borderRightColor='#5FF194'
         borderLeftColor='white'
         borderBottomColor='white'
         borderBlockStartColor='white'
         marginRight={'25px'}
         
       />
       <VStack width={'40vw'} spacing='4vh'>
       <Center fontSize={'30px'} color='green.400'>Update Profile</Center>
       <FormControl 
       id='name' 
       variant="floating" >
       <Input
                
        h='3.2rem' 
        placeholder=' '
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        name='name' 
        type='name' 
        autoComplete='name' 
        required />
        <FormLabel color='#7895B2'>Name</FormLabel>
        </FormControl>
     
         
           
           
         <FormControl id='email' variant="floating" >
           
           <Input
             h='3.2rem'
             placeholder=' '
             name='deptartment'
             type='deptartment'
             autoComplete='deptartment'
             required
              value={departmentname} onChange={(e) => {setDepartmentname(e.target.value);
             }}
            
            
           />
           <FormLabel color='#7895B2'>Department</FormLabel>
         </FormControl>

  

          <FormControl id='id' variant="floating" >
            
            <Input
              h='3.2rem'
              placeholder=' '
              name='program'
              type='program'
              autoComplete='program'
              required
              value={program}
              // onChange={e => setEmail(e.target.value)}
              onChange={(e) => setProgram(e.target.value)}
            />
            <FormLabel color='#7895B2'>Program</FormLabel>
          </FormControl>
        

            <FormControl id='id' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='id'
                type='id'
                autoComplete='id'
                required
                value={studentid}
                // onChange={e => setEmail(e.target.value)}
                onChange={(e) => setStudentid(e.target.value)}
              />
              <FormLabel color='#7895B2'>Student ID</FormLabel>
            </FormControl>

         <HStack>
         <Button variant='outline' colorScheme='red' mr={3} onClick={onClose} >
                 Cancel
               </Button>
               <Button onClick={() => handleSubmit()} colorScheme='blue'>Save</Button>
         </HStack>
         </VStack>
        
             
         </HStack>
         </Stack>
        
    </Layout>
    </ChakraProvider>

 
  )
}
