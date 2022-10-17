import React from 'react'
import { Box, Button, Heading, Text,Grid,GridItem, Input } from '@chakra-ui/react'
function DetailedComment() {
  return (
    <Box p={2}  borderRadius="10">
    <Grid templateColumns="repeat(5, 1fr)" gap={0}>
    <GridItem p={2} colSpan={1} w="100%"  borderRight="1px solid" borderRadius="1">
      <Box >
        <Text>Stats of the question</Text>
        <Input></Input>
        <Button m={2} bgColor="red.200">Post a comment</Button>
      </Box>
    </GridItem>
    <GridItem p={2} w="100%" colSpan={4}  >
      <Box m={2} >
       

        <Text> Brief description of the question</Text>
      </Box>
    </GridItem>
  </Grid>
</Box>
  )
}

export default DetailedComment