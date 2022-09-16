import {
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
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../Context/AuthContext'
import Navlink from './Navlink'

export function Navbar() {
  const { toggleColorMode } = useColorMode()
  // const { logout, currentUSer } = useAuth()
  const { logout, currentUSer } = useAuth()

  return (
    <Box 
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
      py={4}
      bgColor='green.200'
    >
      <HStack 
      
        justifyContent='flex-end'
        maxW='container.lg'
        mx='auto'
        spacing={4}
      >
        <Navlink to='/' name='IUT EDUMATE' bgColor='white' colorScheme='green' size='lg' />
        <Spacer />
        {!currentUSer && <Navlink to='/login' name='Login' bgColor='white' colorScheme='green'/>}
        {!currentUSer && <Navlink to='/register' name='Register' bgColor='white' colorScheme='green' />}
        {currentUSer && <Navlink to='/profile' name='Profile' bgColor='white' colorScheme='green'/>}
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
      </HStack>
    </Box>
  )
}