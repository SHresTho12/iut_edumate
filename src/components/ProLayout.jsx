import React from 'react'
import { Container ,Box} from '@chakra-ui/react'
import { Navbar } from './ProNav'
import { Sidebar } from './SideBar'

export function Layout(props) {
  return (
   
      <>
      <Navbar />
  

      <Container maxW='container.2xl' >{props.children}
      </Container>
      </>
    
  )
}

