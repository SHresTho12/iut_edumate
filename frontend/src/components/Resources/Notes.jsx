import React from 'react'

import { Heading,VStack,Tag,HStack,Box,Text,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaThumbtack, FaTbZoomQuestion,FaExpandAlt } from "react-icons/fa";
function Notes({ data }) {
    // a array that will store the semester , department and course value of data that is passed as props
    const tags = [data.semester , data.department, data.course]
    console.log(data)
  
  return (
    <VStack borderRadius={5} bgColor="#F3F1F5" p={3} alignItems="right"  m="2" color="#00454A" shadow={'2xl'} margin='20px'>
        <Box p={4} fontSize="x-large" bgColor="#affac9" borderRadius='5px' height={'7vh'} >
          <Link  to={`/notes?id=${data?._id}`} >{data?.title}</Link>
        </Box>
        <HStack>
          {tags.map((tag, index) => (
            <Tag key={index} size="sm" colorScheme="teal" variant="solid">
              {tag}
            </Tag>
          ))}

          {/* <Tag bgColor='#9BA3EB'>{tags}</Tag> */}
          {/* <Tag bgColor='#80ED99'>3-1</Tag>
        <Tag bgColor='#90E0EF'>Software Security</Tag> */}
        </HStack>
        <Box>
          <HStack align="flex-start" marginLeft="1vw">
           {/* <FaThumbtack />  */}
            <Box>
              <HStack>
                <Text borderRadius={5} p={2} bgColor="green.200">
                  Liked by : {data?.upvote}
                </Text>
                <Text borderRadius={5} p={2} bgColor="#CFD2CF">
                  Disliked by : {data?.downvote}
                </Text>
              </HStack>
            </Box>
          </HStack>
        </Box>

        <Heading size="md" fontSize="small">
          Total interested People : {data?.interested.length}
        </Heading>

        
          <Button
            bgColor="#affac9"
            _hover={{ bg: "#73de98", color: "white", size:"large",fontSize:"large" }}
            size="md"
            marginLeft="1vw"
            marginBottom={'40vh'}
        
          >
            <Link to={`/notes?id=${data?._id}` }>Expand The Question     .</Link><FaExpandAlt/>
          </Button>
        
      </VStack>
  )
}

export default Notes
