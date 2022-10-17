import { Box,HStack ,Grid,GridItem,Text,Heading} from '@chakra-ui/react'
import React from 'react'

function PostedAnswers() {
  return (
    <Box p={2} bg="#b6e7fc" borderRadius="10" shadow={'2xl'}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1} w="100%"  borderRadius="10"  >
          <Box >
            <Text>Stats of the question</Text>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={4}  >
          <Box m={2} >
            <Heading as='h6' size="md">Description</Heading>

            <Text> Brief description of the question</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default PostedAnswers