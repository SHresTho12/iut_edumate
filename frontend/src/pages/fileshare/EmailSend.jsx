import React from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useToast,
  Heading
} from '@chakra-ui/react'
import { useAuth } from '../../Context/AuthContext'
import { useState } from 'react'
import axios from 'axios'
import { Layout } from '../../components/Layout'
function EmailSend({uuid}) {
    const [emailTo,setEmailTo] = useState("")
    const { currentUSer } = useAuth();
    const toast = useToast()
const emailFrom = currentUSer.email;
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/file/send', {
        emailTo,
        emailFrom,
        uuid,
      })
      toast({
        title: 'Email sent.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error sending email.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }
  return (
    
              
    <Box>  <Heading>
                    <h1>Send The file through Email</h1>
                </Heading>
                <Box>
                     <Input
                h='3.2rem'
                placeholder=' '
                name='email'
                type='email'
                autoComplete='email'
                required
                value={emailTo}
                onChange={e => setEmailTo(e.target.value)}
               
              />
                    <Button onClick={handleSubmit}>Send</Button>
                </Box></Box>
  )
}

export default EmailSend