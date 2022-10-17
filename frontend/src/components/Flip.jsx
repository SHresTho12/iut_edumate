import React from "react";
import ReactCardFlip from "react-card-flip";
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

const CardStyle = {
  border: "4px solid #03506f",
  ShadowRoot:'3xl',
  borderRadius: "30px",
  padding: "20px",
  margin: "20px",
  width: "16vw",
  height: "50vh",
  backgroundColor: "#ffffff"
  
};


function Flip(props) {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
      ShadowRoot='large'
       style={CardStyle}
       onClick={() => setFlipped((prev) => !prev)}
       marginBlockStart='7vh'
        
      >
       {props.sample.cover && (
    <img
    borderRadius='10px'
    
      src={props.sample.cover}
      
      alt=""
    />
    )}
    <div >
      <div >
      <Center fontFamily='-moz-initial' fontWeight='bold' fontSize='2xl' marginBlockStart={'6vh'}>
        {props.sample.name}</Center>
      </div>
      </div>
      </div>
      <div
        style={CardStyle}
        onClick={() => setFlipped((prev) => !prev)}
        
      >
        <p>{props.back}</p>
        
      </div>
    </ReactCardFlip>
    
  );
}

export default Flip;
