import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Heading, Text ,ChakraProvider} from "@chakra-ui/react";
import { useState } from "react";
import Navlink from "../Navlink";
import theme from '../../pages/theme'
function ProjectCards() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    //farmer motion expandable card
    <ChakraProvider theme={theme}>

    <Box
      border="2px solid green"
      _hover={{
        background: "white",
        color: "black",
      }}
      borderRadius={10}
      p="10"
     
     
    >
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="motion-card"
        p={5}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.h2 transition={{ layout: { duration: 1 } }} layout="position">
          <Heading
            _hover={{
              color: "black",
            }}
            size="lg"
            color="#57CC99"
          >
            {" "}
            Project 💡 
          </Heading>
        </motion.h2>
        {isOpen && (
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
         transition={{duration:1}}
         exit={{opacity:0}}
          >
            <motion.p>
              {" "}
              <Text color="black" p={2}>
                orem ipsum dolor sit amet, consectetur adipiscing el aspect
                ratio Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </motion.p>

            <Navlink
              to="/project"
              name="Team Up"
              bgColor="green.200"
              colorScheme="white"
            />
          </motion.div>
        )}
      </motion.div>
    </Box>
     </ChakraProvider>
  );
}

export default ProjectCards;
