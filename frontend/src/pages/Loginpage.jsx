import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  extendTheme,
  Image,
  VStack,
  ChakraProvider,InputRightElement,InputGroup
} from '@chakra-ui/react'
import theme from './theme'
import '@fontsource/josefin-sans/700.css'
import '@fontsource/teko/700.css'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../hooks/useMounted'
import axios from 'axios'

export default function Loginpage() {
  const history = useHistory()
  const { signInWithGoogle, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  // const mounted = useRef(false)
  const location = useLocation()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  // useEffect(() => {
  //   mounted.current = true
  //   return () => {
  //     mounted.current = false
  //   }
  // }, [])

  const mounted = useMounted()
 

  function handleRedirectToOrBack(user) {
    // console.log(location?.state)
    console.log("hello")
     axios.get(`/user/${user.user.uid}`).then((res) => {
      
        
      // if(res.status === false){
      // 
      // }
    }).catch((err) => {
          const initialvalue = {
          fireuid: user.user.uid,
          name: user.user.displayName,
          email: user.user.email,
          
        }
        axios.post("/user",initialvalue).then((response) => {
          console.log(response.data);
        });
      });
    history.replace(location.state?.from ?? '/profile')
    // if (location.state) {
    //   history.replace(location.state?.from)
    // } else {
    //   history.replace('/profile')
    // }
  }

  //write a function that will check if a user already exits with uid if not create one
  function handleGoogle(user) {
    
  }
      

  return (
    <ChakraProvider theme={theme}>
    <Layout >
    <HStack >
    <Image
            src="/images/Account.gif"
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
      <Heading textAlign='center' my={12} color="green.500" >
        Login
      </Heading>
      <Card width='40vw' mx='auto' mt={4} color="gray.600" bgColor=''>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            if (!email || !password) {
              toast({
                description: 'Credentials not valid.',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              return
            }
            // your login logic here
            setIsSubmitting(true)
            login(email, password)
              .then(res => {
                handleRedirectToOrBack()
              })
              .catch(error => {
                console.log(error.message)
                toast({
                  description: error.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
              })
              .finally(() => {
                // setTimeout(() => {
                //   mounted.current && setIsSubmitting(false)
                //   console.log(mounted.current)
                // }, 1000)
                mounted.current && setIsSubmitting(false)
              })
          }}
        >
          <Stack spacing='8'>
        
            <FormControl id='email' variant="floating" >
              
              <Input
                h='3.2rem'
                placeholder=' '
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
               
              />
              <FormLabel  >Email address</FormLabel>
            </FormControl>
           
            <FormControl id='password' variant="floating" >
             
              <InputGroup size='md'>
              <Input
              
              h='3.2rem'
              placeholder=' '
                name='password'
                type='password'
                autoComplete='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
               /><FormLabel>Password</FormLabel>
                <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
      
              
            </FormControl>
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='green'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
           
          </Stack>
        </chakra.form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </Button>
          <Button variant='link' onClick={() => history.push('/register')}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          
          colorScheme='purple'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => {
                handleGoogle(user)
                handleRedirectToOrBack(user)
                
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
      </Card>
      </VStack>
      </HStack>
    </Layout>
    </ChakraProvider>
  )
}