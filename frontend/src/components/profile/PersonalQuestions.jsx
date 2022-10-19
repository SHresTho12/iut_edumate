import { Center ,Heading, VStack,Box, Grid} from '@chakra-ui/react'
import React from 'react'
import Question from '../../components/Query-Section/Question'
function PersonalQuestions({personalQuestions}) {
  return (
    <VStack>
        <Heading>Personal Questions</Heading>



        <Grid templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'>
            {personalQuestions?.map((question) => (
                 <Box borderRadius={5} border="2px" w="100%"><Question data={question} key={question.id} /></Box>
            ))}
                
        </Grid>
        {/* <VStack>


        {personalQuestions?.map((_q) => (
           <Box w="100%"><Question data={_q}  ></Question></Box>
          
        
          ))}


        </VStack> */}

       
    </VStack>
  )
}

export default PersonalQuestions