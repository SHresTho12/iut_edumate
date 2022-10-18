import { Center, GridItem,Grid, Image,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import abouimg from '../../images/Svg/about-img.svg'
import Navlink from '../Navlink'
function Description() {
  return (

<Center>


   <Grid p={10} h="70vh" templateColumns="repeat(2, 1fr)" gap="0">
      <GridItem>
      <Image
    boxSize='70%'
    objectFit='cover'
    src={abouimg}
    alt='Dan Abramov'
  />
   </GridItem>
      <Center>
            <div class="content">
         <Text color="white" fontSize="4xl" fontWeight="bold">why use our platform</Text>
         <Text m={5} color="white" fontSize="lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?</Text>
          <Navlink to='/' name='IUT EDUMATE' bgColor='white' colorScheme='green' size='lg'  />
      </div>
      </Center>
      
   </Grid>
   
</Center>



  )
}

export default Description