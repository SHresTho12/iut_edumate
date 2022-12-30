import axios from "axios";
import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Navlink from "../Navlink";
import parse from "html-react-parser";
function ProjectCards() {

  const [project, setProject] = useState();
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function getFunctionDetails() {
      await axios
        .get(`/pro/${id}`)
        .then((res) => {
          console.log(res.data);
          setProject(res.data[0]);
        })
        .catch((err) => console.log("The error: " + err.message));
    }
    getFunctionDetails();
  }, [id]);
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
        <Box fontSize="x-large" bgColor="#affac9" borderRadius='5px' height={'7vh'} >
          <Link to={`/pro?id=${project?._id}`} >{project?.projectname}</Link>
        </Box>
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
              <Text> {parse(`${project?.projectdescription}`)}</Text>
            </motion.p>

            <Navlink
              to="/project"
              name="Team Up"
              bgColor="green.200"
              colorScheme="white"
            />
          </motion.div>
        )}
        </Box>
      </motion.div>
 
  );
}

export default ProjectCards;
