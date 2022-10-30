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

  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e) => {
   e.preventDefault();
   
   if (currentUSer) {
     setLoading(true);
     const bodyJSON = {
     fireuid : currentUSer.uid,
    name:name,
    email:currentUSer.email,
    department: departmentname,
    studentid:studentid,
    user: currentUSer
     };
     await axios
       .post("/user", bodyJSON)
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
             name='email'
             type='email'
             autoComplete='email'
             required
              value={email} onChange={(e) => {setEmail(e.target.value);
             }}
            
            
           />
           <FormLabel color='#7895B2'>Email</FormLabel>
         </FormControl>

         <FormControl id='id' variant="floating" >
           
           <Input
             h='3.2rem'
             placeholder=' '
             name='id'
             type='id'
             autoComplete='id'
             required
             value={program}
             // onChange={e => setEmail(e.target.value)}
             onChange={(e) => setStudentid(e.target.value)}
           />
           <FormLabel color='#7895B2'>Student ID</FormLabel>
         </FormControl>
         {/* <FormControl id='password' variant="floating" >
           
           <Input
             h='3.2rem'
             placeholder=' '
             name='password'
             type='password'
             autoComplete='password'
             required
             //value={name}
              onChange={e => set(e.target.value)}
            
           />
           <FormLabel color='#7895B2'>Student Id</FormLabel>
         </FormControl> */}
         <HStack>
         <Button variant='outline' colorScheme='red' mr={3} onClick={onClose} >
                 Cancel
               </Button>
               <Button colorScheme='blue'>Save</Button>
         </HStack>
         </VStack>
        
             
         </HStack>
         </Stack>
        
    </Layout>
    </ChakraProvider>

 
  )
}
