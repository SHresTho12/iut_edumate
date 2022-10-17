import { Box,HStack ,Grid,GridItem,Text,Heading} from '@chakra-ui/react'
import React from 'react'

function PostedAnswers(answer) {
  console.log(answer)
  return (

    <Box p={2} bg="blue.200" borderRadius="10">
        {
          answer.map((answer) => (

            <Grid templateColumns="repeat(5, 1fr)" gap={0}>

        <GridItem colSpan={1} w="100%"  borderRight="1px solid" borderRadius="1">
          <Box >
            <Text>Info</Text>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4}  >
          <Box m={2} >
            <Heading as='h6' size="md">Description</Heading>

            <Text> Brief description of the question</Text>
          </Box>
        </GridItem>
      </Grid>
          ))


        }
    </Box>
  )
}

export default PostedAnswers