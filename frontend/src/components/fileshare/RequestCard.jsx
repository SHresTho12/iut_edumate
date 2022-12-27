import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
function RequestCard({ request }) {
    console.log(request)
  return (
     <Box>
    <Flex alignItems='baseline'>
      <Heading as='h3' fontSize='lg'>
        {request.title}
      </Heading>
      <Text ml={2} fontSize='sm' color='gray.600'>
        {request.department? request.department: 'No description'}
      </Text>
    </Flex>
    <Text mt={4}>{request.semester? request.semester: 'No description'}</Text>
    <Text mt={4}>{request.course? request.course: 'No description'}</Text>

    <Text mt={4}>{request.status? "The file is uploaded ": 'The file is not yet uploaded'}</Text>
    {
        request.status? <Link to={`/download?id=${request?._id}` }>Expand The Question     .</Link> : null
    }
 </Box>
  )
}

export default RequestCard