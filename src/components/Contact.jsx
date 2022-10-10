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
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";
import { FilePondComponent } from "./filepond";

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

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Info</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
            017********
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
             labiba@iut-dhaka.edu
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
             Islamic University of Technology
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            What’s your idea?Let's discuss your project.
            <div className="c-bg1"></div>
          </p>
          
          <form >
          <FormControl id='name' variant="floating" >
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' '   name='name' type='name' autoComplete='name' required />
           <FormLabel>Project Name</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" >
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' '   name='subject' type='text' autoComplete='subject' required />
           <FormLabel>Subject</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" >
              
              
              <Input marginBottom='8px'
                h='3.2rem' placeholder=' '   name='email' type='email' autoComplete='email' required />
           <FormLabel>Email</FormLabel>
            </FormControl>

            <FormControl id='name' variant="floating" >
              
              
              <textarea className='textarea'
                h='3.2rem' placeholder=' '  rows={'5'} name='message' type='text' autoComplete='message' required />
           <FormLabel>Project Idea</FormLabel>
            </FormControl>
        
            <Button name='btn' type='submit' colorScheme='green' size='lg' fontSize='md' marginBottom='8px'>
              Submit
            </Button>
          

         
         
          </form>



         
        </div>

        
      </div>
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
              
              
              <textarea className='txt'
                h='3.2rem' placeholder=' ' width='10%'  rows={'5'} name='message' type='text' autoComplete='message' required />
           <FormLabel>Abstract</FormLabel>
            </FormControl>
            <Box  marginLeft='50px' width='80%'>
            
            Upload your file here
          <FilePondComponent  />
        </Box>
        
            {/* <Button name='btn' type='submit' colorScheme='green' size='lg' fontSize='md' marginLeft='50px'>
              Submit
            </Button> */}
          

         
         
          </form>
     
      
    </div>
    
  );
};

export default Contact;
