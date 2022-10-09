import {
  Input,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button, 
  ButtonGroup ,
  FormControl,
  FormLabel,
  Stack
} from '@chakra-ui/react'
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";

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
          <h1 className="c-title">Let's discuss your project</h1>
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
            <b>What’s your idea?</b> Get in touch. Always available for
            team project if the right project comes along.
          </p>
          <form  >
          <FormControl id='name' variant="floating" >
              
               <Input
               style={{backgroundColor:  ""}} type="text" placeholder=' ' name="name" autoComplete='name' required />
           <FormLabel color='#7895B2'>Name</FormLabel>
            </FormControl>
            
            <FormControl id='name' variant="floating" >
              
              <Input
              style={{backgroundColor:  ""}} type="text" placeholder=' ' name="subject" autoComplete='subject' required />
          <FormLabel color='#7895B2'>Subject</FormLabel>
           </FormControl>
           <FormControl id='name' variant="floating" >
              
              <Input
              style={{backgroundColor:  ""}} type="email" placeholder=' ' name="mail" autoComplete='name' required />
          <FormLabel color='#7895B2'>Email</FormLabel>
           </FormControl>
            <textarea style={{backgroundColor: ""}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
