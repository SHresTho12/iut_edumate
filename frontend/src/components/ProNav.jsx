import {
  Link,
  Tooltip,
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Image,
  Button, 
  ButtonGroup ,
  Avatar
} from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from './SideBar'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../Context/AuthContext'
import Navlink from './Navlink'

export function Navbar() {
  const { toggleColorMode } = useColorMode()
  // const { logout, currentUSer } = useAuth()
  const { logout, currentUSer } = useAuth()

  return (
    <Box 
    borderBottom='9px'
    borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
    mb={4}
    py={1}
    bgColor='green.400'
    height={65}
  >
    <HStack 
    
      justifyContent='flex-end'
      maxW='container.lg'
      mx='auto'
      spacing={5}
    >      <Image src="/images/iutlogo.png" alt="s" height='14' width='8' borderRadius="8"  sx={{ filter: 'blur(0px)' }}/>
        <Navlink to='/' name='IUT EDUMATE' bgColor='white' colorScheme='green' size='md'  />
        <Spacer />
        {currentUSer && <Link><Sidebar/></Link>}
        
        {/* {!currentUSer && <Navlink to='/login' name='Login' bgColor='white' colorScheme='green' />}
        {!currentUSer && <Navlink to='/register' name='Register' bgColor='white' colorScheme='green' />} */}
        {/* <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
        {/* {currentUSer && <Navlink to='/profile' name='Profile' bgColor='white' colorScheme='green' />} */}
        {currentUSer && (
          <Navlink
            to='/logout'
            name='Logout'
            bgColor='white'
            colorScheme='red'
           
            onClick={async e => {
              e.preventDefault()
              await logout()
            }}
          />
        )}
        <IconButton
          variant='ghost'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        />
        <Image src="/images/oic.png" alt="s" height='10' width='10' borderRadius="8" sx={{ filter: 'blur(0px)' }}/>
      </HStack>
    </Box>
  )
}