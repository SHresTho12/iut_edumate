import React from 'react'
import { Center,  useColorModeValue, GridItem,Grid,Box, Image,Text,Stack,Heading } from '@chakra-ui/react'
import course1 from '../../images/Svg/course-4.svg' 
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
           Co-Curricular Activities
          </Text>
          <Heading color={"grey.900"} fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            Games and Activities
          </Heading>
           <Navlink
              to="/co"
              name="Co-Curricular Activities"
              colorScheme="green"
               _hover={{ bg: "grey" }}
              bgColor="white"
              size="md"
              height="55px"
              width="200px"
              border="2px"
              borderColor="teal.400"
            />
           
        </Stack>
      </Box>
    </Center>
  )
}

export default FeatureCard