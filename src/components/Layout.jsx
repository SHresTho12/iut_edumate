import React from 'react'
import { Container ,Box} from '@chakra-ui/react'
import { Navbar } from './Navbar'

export function Layout(props) {
  return (
    <Box bgColor='green.100'>
      
      <Navbar />
      <Container maxW='container.lg' >{props.children}</Container>
    </Box>
  )
}
