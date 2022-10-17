import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  ChakraProvider,
  Box,
  HStack,
  VStack,
  Image
} from '@chakra-ui/react'
import '@fontsource/josefin-sans/700.css'
import '@fontsource/teko/700.css'
import theme from './theme'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../hooks/useMounted'
import  axios  from 'axios'
export default function Registerpage() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast =  useToast()
  const mounted = useMounted()
  const {register,signInWithGoogle} = useAuth()
  const {currentUSer} = useAuth()
  const initialvalue = {
    Uid:"",
    Name:"",
    Email:"",
    Number:""
  }
  return (
    <ChakraProvider theme={theme}>
    <Layout  >
    <HStack >
    <Image
            src="/images/sign.gif"
            alt="s"
           
            sx={{ filter: "blur(0px)" }}
            width='50vw'
            border='8px' 
            borderRightColor='#5FF194'
            borderLeftColor='white'
            borderBottomColor='white'
            borderBlockStartColor='white'
            
          />
    <VStack width='70vw'>
      <Heading textAlign='center' my={12} color="green.400">
        Register
      </Heading>
      <Box  >
      <Card width='40vw' mx='auto' mt={4}  color="gray.500">
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your register logic here
           // console.log(email , password);
           if(!email || !password){
             toast({
               description: "Credentials not valid",
               status:'error',
               duration: 5000,
               isClosable: true
             })
           }

           setIsSubmitting(true)
           register(email , password)
           .then((response) => {console.log(response);
          
          initialvalue.Uid=response.user.uid;
          initialvalue.Name = name;
          initialvalue.Email = email;
          initialvalue.Number="";
          axios.post("http://localhost:3001/profile",initialvalue).then((response) => {
            console.log(response.data);
      
    });
          })
           .catch((error) => {
             console.log(error.message)
           toast({
               description: error.message,
               status:'error',
               duration: 5000,
               isClosable: true
             })}
          
             ).finally(() => {
               mounted.current &&setIsSubmitting(false);
               //let obj = JSON.stringify(currentUSer , null , 2);
              
              
              //initialvalue.Uid=JSON.stringify(currentUSer.email);
              console.log(initialvalue);
            
            })
           

          }}
        >
          <Stack spacing='6'>
            <FormControl id='name' variant="floating" >
              
              
              <Input
                h='3.2rem' placeholder=' ' value={name} onChange={(e) => setName(e.target.value)} name='name' type='name' autoComplete='name' required />
           <FormLabel>Enter Name</FormLabel>
            </FormControl>
            <FormControl id='email' variant="floating" >
              
              <Input h='3.2rem' placeholder=' ' value={email} onChange={(e) => setEmail(e.target.value)} name='email' type='email' autoComplete='email' required />
              <FormLabel>Email address</FormLabel>
            </FormControl>
            <FormControl id='password' variant="floating" >
              
              <Input
              h='3.2rem'
              placeholder=' '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                type='password'
                autoComplete='password'
                required
              />
              <FormLabel>Password</FormLabel>
            </FormControl>
            <Button isLoading={isSubmitting} type='submit' colorScheme='green' size='lg' fontSize='md'>
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button variant='link' colorScheme='green' fontSize='lg' onClick={() => history.push('/login')}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='purple'
          leftIcon={<FaGoogle />}
          onClick={() => signInWithGoogle().then(user => console.log(user)).catch(error => console.log(error))}
        >
          Sign in with Google
        </Button>
      </Card>
      </Box>
      </VStack>
      </HStack>
    </Layout>
    </ChakraProvider>
  )
}