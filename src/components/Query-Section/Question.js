import { Box, ButtonGroup, Heading, VStack,Button } from '@chakra-ui/react'
import React from 'react'

function Question() {
  return (
<VStack alignItems='right' borderY='1px' m='2'>
<Heading size='lg'>
    Why are there too much cats in iut?
</Heading>
<Box>
    Because it is a cat haven.
</Box>
<ButtonGroup m='2'>
    <Button colorScheme="teal" size="md">Comment</Button>
    <Button colorScheme="teal" size="md">Upvote</Button>
    <Button colorScheme="red" size="md">Downvote</Button>
</ButtonGroup>
<Box>
    Top Answer
</Box>
</VStack>
  )
}

export default Question