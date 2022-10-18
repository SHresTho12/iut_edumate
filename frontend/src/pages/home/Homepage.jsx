import React from 'react'
import Description from '../../components/homepage/Description'
import Features from '../../components/homepage/Features'
import Home from '../../components/homepage/Home'
import SiteStaus from '../../components/homepage/SiteStaus'
import TopStudents from '../../components/homepage/TopStudents'
import { Layout } from '../../components/Layout'

//import '../../Css/home.css'
import { Box } from '@chakra-ui/react'
import { useAuth } from '../../Context/AuthContext'
function Homepage() {
  
  const { currentUSer, setLoading, setAlert } = useAuth()


  return (
    <Layout>
     
    <Box   bgColor="#3d3d3d">
      <Home></Home>
    <SiteStaus></SiteStaus>
    <Description></Description>
     <Features></Features>
    {/*<TopStudents></TopStudents> */} 
    </Box>
    </Layout>
    
  )
}

export default Homepage