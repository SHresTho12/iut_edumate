import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Text,VStack,HStack,Button,ChakraProvider } from '@chakra-ui/react'
import theme from "../Query-Section/theme";
function RequestCard({ request }) {
    console.log(request)
  return (
  
 <ChakraProvider theme={theme}>
      <VStack alignItems="right"  m="2" color="#00454A" shadow={'2xl'} margin='20px'>
        <Box fontSize="x-large" bgColor="#affac9" borderRadius='5px' height={'7vh'} >
          <Link to={'./download'} >{request?.title}</Link>
        </Box>
        <HStack>
        

          {/* <Tag bgColor='#9BA3EB'>{tags}</Tag> */}
          {/* <Tag bgColor='#80ED99'>3-1</Tag>
        <Tag bgColor='#90E0EF'>Software Security</Tag> */}
        </HStack>
        <Box>
        
        </Box>

        

        
          <Button
            bgColor="#affac9"
            _hover={{ bg: "#73de98" }}
            size="md"
            marginLeft="1vw"
            marginBottom={'40vh'}
        
          >
             {
        request.status? <Link to={`/download?id=${request?.uuid}` }>Download</Link> : null
    }
    
          </Button>
        
      </VStack>
    </ChakraProvider>
  )
}

export default RequestCard