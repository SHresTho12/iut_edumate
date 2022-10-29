import { Box,VStack,Heading, Center,Input } from '@chakra-ui/react'
import React from 'react'

function Uploadbox() {
  return (
    <Box  m={10} borderRadius={10} boxShadow='xl' width="40%" p={10}>
        <Box border="dashed" borderColor="blue.200" className="drop-zone">
           <VStack>
             <Heading m="2" p="2" className="drop-zone__prompt">Drop files here to upload</Heading>
            <Center><Input m={4} type="file"  className="drop-zone__input" /></Center>
           </VStack>

        </Box>
        


    </Box>
  )
}

export default Uploadbox