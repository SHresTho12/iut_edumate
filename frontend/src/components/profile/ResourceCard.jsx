import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navlink from "../Navlink";
function ResourceCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    //farmer motion expandable card
    
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="motion-card"
        p={5}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box
      border="2px solid green"
      _hover={{
        background: "white",
        color: "black",
      }}
      borderRadius={10}
      p="10"
     
     
    >
        <motion.h2 transition={{ layout: { duration: 1 } }} layout="position">
          <Heading
            _hover={{
              color: "black",
            }}
            size="lg"
            color="green.200"
          >
            {" "}
            Resource
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
                Some description about the resource
              </Text>
            </motion.p>

            <Navlink
              to="/project"
              name="Request"
              bgColor="green.200"
              colorScheme="white"
            />
          </motion.div>
        )}
        </Box>
      </motion.div>
 
  );
}

export default ResourceCard;
