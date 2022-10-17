import {
     Input,
     Avatar,
     Drawer,
     DrawerOverlay,
     DrawerFooter,
     DrawerBody,
     DrawerHeader,
     useDisclosure,
     DrawerContent,
     DrawerCloseButton,
     Box,
     HStack,
     IconButton,
     Spacer,
     useColorMode,
     useColorModeValue,
     Button, 
     ButtonGroup ,
     FormControl,
     FormLabel,
     Stack
   } from '@chakra-ui/react'
   import React from 'react'
   import { useState } from 'react'
   import { useAuth } from '../Context/AuthContext'
   import {useHistory} from 'react-router-dom'
   import axios from "axios";
export function Sidebar() {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const btnRef = React.useRef()
     const { logout, currentUSer } = useAuth()
     const [email, setEmail] = useState('')
     const [name, setName] = useState('')
     const [password, setPassword] = useState('')
     const history = useHistory()

     const [loading,setLoading] = useState(false);

     const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (currentUSer) {
        setLoading(true);
        const bodyJSON = {
       name:name,
       email:email,
       password:password
        };
        await axios
          .post("/user", bodyJSON)
          .then((res) => {
            // console.log(res.data);
            alert("Updated");
            setLoading(false);
            history.push("/profile");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
   
     return (
       <>
         {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}> */}
         {currentUSer && <Avatar as='Button' name={currentUSer.email}  size='md' bgColor='#2B4865' ref={btnRef} colorScheme='teal' onClick={onOpen} />}
         {/* </Button> */}
         <Drawer
           isOpen={isOpen}
           placement='right'
           onClose={onClose}
           finalFocusRef={btnRef}
           
         >
           <DrawerOverlay />
           <DrawerContent >
             <DrawerCloseButton />
             <DrawerHeader>Update Profile</DrawerHeader>
   
             <DrawerBody >

             <Stack spacing='8'>
             <FormControl id='name' variant="floating" >
              
              
              <Input
                h='3.2rem' placeholder=' ' value={name} onChange={(e) => setName(e.target.value)} name='name' type='name' autoComplete='name' required />
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
                value={email}
                onChange={e => setEmail(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Email address</FormLabel>
            </FormControl>
            <FormControl id='email' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='number'
                type='number'
                autoComplete='number'
                required
                value={email}
                 onChange={e => setEmail(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Student ID</FormLabel>
            </FormControl>
            <FormControl id='email' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='deptname'
                type='deptname'
                autoComplete='deptname'
                required
                // value={name}
                // onChange={e => setEmail(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Department</FormLabel>
            </FormControl>

            <FormControl id='email' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='deptname'
                type='deptname'
                autoComplete='deptname'
                required
                //value={name}
                // onChange={e => setEmail(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Program</FormLabel>
            </FormControl>

            </Stack>
             </DrawerBody>
   
             <DrawerFooter>
               <Button variant='outline' colorScheme='red' mr={3} onClick={onClose} >
                 Cancel
               </Button>
               <Button colorScheme='blue' disabled={loading} type='submit' onClick={handleSubmit} >Save</Button>
             </DrawerFooter>
           </DrawerContent>
         </Drawer>
       </>
     )
   }