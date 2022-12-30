import React, { useState, useEffect } from 'react'
import axios from 'axios'


import {
  ChakraProvider,
  Center,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
 
  Heading,
  Text,
  
  Link,
  Flex,
  Spinner,
  
} from "@chakra-ui/react";
import { Layout } from '../../components/Layout';
const FootballSchedule = () => {
  const [matches, setMatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328'
        )
        setMatches(response.data.events)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
   <Layout>
     <Box>
      {matches.map((match) => (
        <Box key={match.idEvent} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{match.strEvent}</Heading>
          <Text>{match.strDate}</Text>
          <Text>{match.strTime}</Text>
        </Box>
      ))}
    </Box>
   </Layout>
  )
}

export default FootballSchedule
