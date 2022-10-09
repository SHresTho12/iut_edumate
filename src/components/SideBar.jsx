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
export function Sidebar() {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const btnRef = React.useRef()
     const { logout, currentUSer } = useAuth()
     const [email, setEmail] = useState('')
     const [name, setName] = useState('')
   
     return (
       <>
         {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}> */}
         {currentUSer && <Avatar name={currentUSer.email}  size='md' bgColor='#2B4865' ref={btnRef} colorScheme='teal' onClick={onOpen} />}
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
           <FormLabel color='#7895B2'>Update Name</FormLabel>
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
              <FormLabel color='#7895B2'>Update Email address</FormLabel>
            </FormControl>
            <FormControl id='email' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='number'
                type='number'
                autoComplete='number'
                required
                // value={email}
                // onChange={e => setEmail(e.target.value)}
               
              />
              <FormLabel color='#7895B2'>Update Student ID</FormLabel>
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
              <FormLabel color='#7895B2'>Update Department</FormLabel>
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
              <FormLabel color='#7895B2'>Update Program</FormLabel>
            </FormControl>

            </Stack>
             </DrawerBody>
   
             <DrawerFooter>
               <Button variant='outline' mr={3} onClick={onClose} >
                 Cancel
               </Button>
               <Button colorScheme='blue'>Save</Button>
             </DrawerFooter>
           </DrawerContent>
         </Drawer>
       </>
     )
   }