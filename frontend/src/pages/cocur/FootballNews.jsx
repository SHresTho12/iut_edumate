

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
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FootballNews = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=dummy'
          //66e79f2589f34959b0f8eefbd79bcfa7
        )
        setNews(response.data.articles)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
        <Center><Heading> Latest Football News</Heading></Center>
        <Box>
      {news.map((article) => (
        <Flex key={article.title} p={5} shadow="md" borderWidth="1px">
          <Image h="200" src={article.urlToImage} alt={article.title} mr={6} />
          <Box>
            <Heading fontSize="xl">
              <Link href={article.url} isExternal>
                {article.title}
              </Link>
            </Heading>
            <Text>{article.description}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
    </div>
  )
}

export default FootballNews
