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
       program:setProgram,
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
   


    // const handleprofileSubmit = async (e) => {
    //   e.preventDefault();
    
     
    //     const bodyJSON = {
    //       title: title,
    //       body: body,
    //       tags: JSON.stringify(tags),
    //       user: currentUSer,
    //     };
    //     await axios
    //       .post("/askquestion", bodyJSON)
    //       .then((res) => {
    //         // console.log(res.data);
    //         alert("Question added successfully");
    //         setLoading(false);
    //         history.push("/query");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    // };


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
        
            
              
              
            <FormControl id='department' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='deptname'
                type='deptname'
                autoComplete='deptname'
                required
                 value={departmentname} onChange={(e) => {setDepartmentname(e.target.value);
                }}
               
               
              />
              <FormLabel color='#7895B2'>Department</FormLabel>
            </FormControl>

            <FormControl id='email' variant="floating" >
              
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
            <FormControl id='semester' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='Student Id'
                type='studentid'
                autoComplete='studentid'
                required
                value={studentid}
                 onChange={e => setStudentid(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Student Id</FormLabel>
            </FormControl>
            {/* <FormControl id='email' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='Student Id'
                type='studentid'
                autoComplete='studentid'
                required
                //value={name}
                 onChange={e => setStudentid(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Student Id</FormLabel>
            </FormControl> */}

            </Stack>
             </DrawerBody>
   
             <DrawerFooter>
               <Button variant='outline' colorScheme='red' mr={3} onClick={onClose} >
                 Cancel
               </Button>
               <Button colorScheme='blue.200' disabled={loading} type='submit'  >Update</Button>
               <Button colorScheme='blue' disabled={loading} type='submit' onClick={handleSubmit} >Save</Button>
             </DrawerFooter>
           </DrawerContent>
         </Drawer>
       </>
     )
   }