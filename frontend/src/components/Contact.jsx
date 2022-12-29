import {
  Input,
  Box,

  Button, 
  ButtonGroup ,
  FormControl,
  FormLabel,
  Stack,
  Heading
} from '@chakra-ui/react'
import "./contact.css";
import axios from "axios"

import { useContext, useRef, useState } from "react";

import { ThemeContext } from "../context";
import { FilePondComponent } from "./filepond";
import { useAuth } from '../Context/AuthContext';

const Contact = () => {




//axios put req to post project data
  const { currentUSer } = useAuth()
  const [loading,setLoading] = useState(false);
const [projectname,setProjectname] = useState('')
const [projectlink,setProjectlink] = useState('')
const [ projectdescription,setProjectdescription] = useState('')
const [ projectSubject,setProjectSubject] = useState('')
const handleSubmit = async () => {
  const body = {
    projectname: projectname,
    projectSubject: projectSubject,
    projectlink: projectlink,
    projectdescription: projectdescription,
    user:currentUSer,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios
    .post("/project", body, config)
    .then(() => {
      alert("Answer added successfully");
    
    })
    .catch((err) => console.log(err));
};

  return (
    <div className="c">
      <div className="c-bg"></div>
      <Heading marginLeft='50px' fontSize='2xl' >
            <b marginLeft='50px'>What's your Idea?</b> 
            <div className="c-bg2"></div>
          </Heading>
          
          <form >
          <FormControl id='name' variant="floating" marginLeft='50px'   >
              
              
              <Input marginBottom='8px' value={projectname} onChange={(e) =>setProjectname(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%'   name='name' type='name' autoComplete='name' required />
           <FormLabel>Project Name</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px'>
              
              
              <Input marginBottom='8px' value={projectSubject} onChange={(e) =>setProjectSubject(e.target.value)}
                h='3.2rem' placeholder=' '  width='80%'   name='subject' type='text' autoComplete='subject' required />
           <FormLabel>Subject</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px' >
              
              
              <Input marginBottom='8px' value={projectlink}  onChange={(e) =>setProjectlink(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%'  name='projectlink' type='text' autoComplete='email' required />
           <FormLabel>Project Link</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px'>
              
              
              <Input className='txt' value={projectdescription} onChange={(e) =>setProjectdescription(e.target.value)}
                h='5rem' placeholder=' ' width='80%'  rows={'5'} name='projectdescription' type='text' autoComplete='message' required />
           <FormLabel>Project Idea</FormLabel>
            </FormControl>
            {/* <Box  marginLeft='50px' width='80%'>
            
            Upload your file here
          <FilePondComponent  />
        </Box>
         */}
            <Button onClick={handleSubmit} name='btn' type='submit' colorScheme='green' size='md' marginBottom='18px' fontSize='md' marginLeft='50px'>
              Submit
            </Button>
          

         
         
          </form>
     
      <Heading marginLeft='50px' fontSize='2xl' >
            <b marginLeft='50px'>Upload your Research Papers here.</b> 
            <div className="c-bg2"></div>
          </Heading>
          
          <form >
          <FormControl id='name' variant="floating" marginLeft='50px' >
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' ' width='80%'   name='name' type='name' autoComplete='name' required />
           <FormLabel>Paper Title</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px'>
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' ' width='80%'   name='subject' type='text' autoComplete='subject' required />
           <FormLabel>Author</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px' >
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' ' width='80%'  name='email' type='email' autoComplete='email' required />
           <FormLabel>Email</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px' >
              
              
              <Input marginBottom='8px' value={projectlink}  onChange={(e) =>setProjectlink(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%'  name='projectlink' type='text' autoComplete='email' required />
           <FormLabel>Paper Link</FormLabel>
            </FormControl>
        
            <Button onClick={handleSubmit} name='btn' type='submit' colorScheme='green' size='md' marginBottom='18px' fontSize='md' marginLeft='50px'>
              Submit
            </Button>
            <Button disabled={loading} type='submit' onClick={handleSubmit} bg="#4A47A3" m={2} color='#EDF7FA' height='9vh' fontSize='large' _hover={{ bg: "#192965" }}>
              {loading?'Adding Project Idea .....' : 'Post Question '}
            </Button>
          

         
         
          </form>
     
      
    </div>
    
  );
};

export default Contact;
