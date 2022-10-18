import React from 'react'
import { Center,  useColorModeValue, GridItem,Grid,Box, Image,Text,Stack,Heading } from '@chakra-ui/react'
import course1 from '../../images/Svg/course-5.svg' 
import Navlink from '../Navlink'
function FeatureCard() {
  return (
     <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg="#4b4b4b"
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-4}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${course1})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={course1}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
           Query Section
          </Text>
          <Heading color={"grey.900"} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Find All Questions
          </Heading>
           <Navlink
              to="/query"
               name="Query section"
                colorScheme="green"
              _hover={{ bg: "grey" }}
              bgColor="white"
              size="md"
              height="50px"
              width="200px"
              border="2px"
              
            />
           
        </Stack>
      </Box>
    </Center>
  )
}

export default FeatureCard