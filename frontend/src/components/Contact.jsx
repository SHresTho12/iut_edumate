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
  // const formRef = useRef();
  // const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_rrvnzco",
  //       "template_3v5nih4",
  //       formRef.current,
  //       "user_DrriDPTGKO2Zj4RDXCA6W"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true)
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };



//axios put req to post project data
  const { currentUSer } = useAuth()
const [projectname,setProjectname] = useState('')
const [projectlink,setProjectlink] = useState('')
const [ projectdescription,setProjectdescription] = useState('')
const handleSubmit = async () => {
  const body = {
    projectname: projectname,
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
              
              
              <Input marginBottom='8px' value='' onChange={(e) =>setProjectname(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%'   name='name' type='name' autoComplete='name' required />
           <FormLabel>Project Name</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px'>
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' ' width='80%'   name='subject' type='text' autoComplete='subject' required />
           <FormLabel>Subject</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px' >
              
              
              <Input marginBottom='8px' value='' onChange={(e) =>setProjectlink(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%'  name='projectlink' type='text' autoComplete='email' required />
           <FormLabel>Project Link</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" marginLeft='50px'>
              
              
              <Input className='txt' value='' onChange={(e) =>setProjectdescription(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%' height='20vh' rows={'5'} name='projectdescription' type='text' autoComplete='message' required />
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

            <FormControl id='name' variant="floating" marginLeft='50px'>
              
              
            <Input marginBottom='8px'
                h='3.2rem' placeholder=' ' width='80%' height='20vh'  name='message' type='text' autoComplete='message' required />
           <FormLabel>Abstract</FormLabel>
            </FormControl>
            <FormControl id='name' variant="floating" marginLeft='50px' >
              
              
              <Input marginBottom='8px' value='' onChange={(e) =>setProjectlink(e.target.value)}
                h='3.2rem' placeholder=' ' width='80%'  name='projectlink' type='text' autoComplete='email' required />
           <FormLabel>Paper Link</FormLabel>
            </FormControl>
            <Button onClick={handleSubmit} name='btn' type='submit' colorScheme='green' size='md' marginBottom='18px' fontSize='md' marginLeft='50px'>
              Submit
            </Button>
        
            {/* <Button name='btn' type='submit' colorScheme='green' size='lg' fontSize='md' marginLeft='50px'>
              Submit
            </Button> */}
          

         
         
          </form>
     
      
    </div>
    
  );
};

export default Contact;
