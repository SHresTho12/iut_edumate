import React from 'react'
import Description from '../../components/homepage/Description'
import Features from '../../components/homepage/features'
import Home from '../../components/homepage/Home'
import SiteStaus from '../../components/homepage/SiteStaus'
import TopStudents from '../../components/homepage/TopStudents'
import { Layout } from '../../components/Layout'

function Homepage() {
  return (
    <Layout><Home></Home>
    <SiteStaus></SiteStaus>
    <Description></Description>
    <Features></Features>
    <TopStudents></TopStudents>
    </Layout>
    
  )
}

export default Homepage