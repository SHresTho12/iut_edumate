import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import Question from './Question'
import axios from 'axios'

function QueryFeed({questions}) {





  return (
    <Box border="" >


       <Flex align="center" justify="center">
        <Heading as='h2' size='lg'  color='#00454A' shadow={'2xl'}>Query Feed</Heading>
       </Flex>
       {questions?.map((_q) => (
           <Question data={_q}  ></Question>
          
        
          ))}
       
    </Box>
  )
}

export default QueryFeed