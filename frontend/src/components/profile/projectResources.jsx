import {
     Box,
     Center,
     useColorModeValue,
     Heading,
     Text,
     Stack,
     Image,
     Button,
     ChakraProvider
   } from '@chakra-ui/react';
   import { Layout } from '../components/Layout'
   import theme from '../pages/theme'
   
   const IMAGE =
     '/images/art.jpg';
     const IMAGE1 =
     '/images/photo.jpg';
     const IMAGE2 =
     '/images/pub.jpg';
   
   export default function Art() {
     return (
          <ChakraProvider theme={theme}>
          <Layout>

       <Center py={12}>
         <Box
         as='Button'
           role={'group'}
           p={6}
           maxW={'330px'}
           height={'400px'}
           w={'full'}
           bg={useColorModeValue('white', 'gray.800')}
           boxShadow={'2xl'}
           rounded={'lg'}
           pos={'relative'}
           zIndex={1}
           m='5vh'>
           <Box
             rounded={'lg'}
             mt={-12}
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
               backgroundImage: `url(${IMAGE})`,
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
               src={IMAGE}
             />
           </Box>
           <Stack pt={10} align={'center'}>
             {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             
             </Text> */}
             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              Arts & Crafts
             </Heading>
             <Stack direction={'row'} align={'center'}>
               <Text fontWeight={100} fontSize={'md'}>
               “The life so short, the craft so long to learn.” – Hippocrates.
               </Text>
              
             </Stack>
           </Stack>
         </Box>
         <Box
         as='Button'
           role={'group'}
           height={'400px'}
           p={6}
           maxW={'330px'}
           w={'full'}
           bg={useColorModeValue('white', 'gray.800')}
           boxShadow={'2xl'}
           rounded={'lg'}
           pos={'relative'}
           zIndex={1}
           m='5vh'>
           <Box
             rounded={'lg'}
             mt={-12}
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
               backgroundImage: `url(${IMAGE2})`,
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
               src={IMAGE2}
             />
           </Box>
           <Stack pt={10} align={'center'}>
             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          
             </Text>
             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             Writing
             </Heading>
             <Stack direction={'row'} align={'center'}>
               <Text fontWeight={100} fontSize={'md'}>
               "It's never been a better time to be a writer --or aspire to become one."-Unknown Author
               </Text>
               <Text textDecoration={'line-through'} color={'gray.600'}>
                 
               </Text>
             </Stack>
           </Stack>
         </Box>
         <Box
         as='Button'
           role={'group'}
           p={6}
           maxW={'330px'}
           height={'400px'}
           w={'full'}
           bg={useColorModeValue('white', 'gray.800')}
           boxShadow={'2xl'}
           rounded={'lg'}
           pos={'relative'}
           zIndex={1}
           m='5vh'>
           <Box
             rounded={'lg'}
             mt={-12}
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
               backgroundImage: `url(${IMAGE2})`,
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
               src={IMAGE1}
             />
           </Box>
           <Stack pt={10} align={'center'}>
             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
               
             </Text>
             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              Photography
             </Heading>
             <Stack direction={'row'} align={'center'}>
               <Text fontWeight={100} fontSize={'md'}>
               “Taking an image, freezing a moment, reveals how rich reality truly is."— Anonymous
               </Text>
               <Text textDecoration={'line-through'} color={'gray.600'}>
                 
               </Text>
             </Stack>
           </Stack>
         </Box>
       </Center>
       </Layout>
       </ChakraProvider>
     );
   }