import {
  Image,
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,HStack,
  useToast,
  ChakraProvider
} from '@chakra-ui/react'
import '@fontsource/josefin-sans/700.css'
import '@fontsource/teko/700.css'
import theme from './theme'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'  

export default function ForgotPasswordPage() {
  const history = useHistory()
  const { forgotPassword } = useAuth()
  const toast = useToast()

  const [email, setEmail] = useState('')

  return (
    <ChakraProvider theme={theme}>
    <Layout>
    <HStack >
    <Image
            src="/images/pass.gif"
            alt="s"
           
            sx={{ filter: "blur(0px)" }}
            width='80vh'
            border='8px' 
            borderRightColor='#D44949'
            borderLeftColor='white'
            borderBottomColor='white'
            borderBlockStartColor='white'
            height='80vh'
            
          />
    <VStack width='70vw'>
      <Heading textAlign='center' my={5} color='#B73E3E'>
        Forgot password
      </Heading>
      <Center bgColor='#FFDEDE'  >Enter Your Email Address to Reset Your Password</Center>
      <Card width='40vw' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your login logic here
            try {
              await forgotPassword(email)
              toast({
                description: `An email is sent to ${email} for password reset instructions.`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            } catch (error) {
              console.log(error.message)
              toast({
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            }
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email' variant="floating">
           
             

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
            <Button type='submit' bgColor='#DD4A48' color='white' size='lg' fontSize='xl' _hover={{bg:'#ba2f2d'}}>
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button variant='link' onClick={() => history.push('/login')} color='teal.700' fontSize='larger'>
            Login
          </Button>
        </Center>
      </Card>
      </VStack>
      </HStack>
    </Layout>
    </ChakraProvider>
  )
        }