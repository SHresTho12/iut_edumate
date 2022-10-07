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
     ButtonGroup 
   } from '@chakra-ui/react'
   import React from 'react'
   import { useAuth } from '../Context/AuthContext'
export function Sidebar() {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const btnRef = React.useRef()
     const { logout, currentUSer } = useAuth()
   
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
           <DrawerContent bgColor='#A6D1E6'>
             <DrawerCloseButton />
             <DrawerHeader>Update Profile</DrawerHeader>
   
             <DrawerBody>
               <Input placeholder='Type here...' />
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