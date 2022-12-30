import { Grid, Box, HStack, Icon, Text, Center } from "@chakra-ui/react";
import React from "react";
import Navlink from "../../components/Navlink";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaArrowUp,
  FaFileUpload,
  FaHandsHelping,
  FaQuestion
} from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { useState,useEffect } from "react";
function SiteStaus({personalQuestions}) {
const [count , setCount] = useState("11")
//get request to get the number of answers available
const { currentUSer } = useAuth();
    const [userList , setUserList] = useState([]);
useEffect(() => {
  async function getProjects() {
    await axios
      .get(`/answer/count`)
      .then((res) => {
        setCount(res.data.count)
        console.log(res.data)
      })
      .catch((err) => console.log("The error: " + err.message));
  }
  getProjects();
}, []);
useEffect(() => {
        axios.get('/leaderboard')
            .then(res => {
                setUserList(res.data.data);
                
            })
            .catch(err => console.log(err));
    }, []);

const uid = currentUSer.uid;

    //finst the user in the list
    const user = userList.find((user) => user.fireuid === uid);

  return (
    <Center>
      {" "}
      <Grid
        w="80%"
        color="white"
        p={10}
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={12} as={FaFileUpload}></Icon>
            <Text fontSize="xl">10+ resource post</Text>
          </HStack>
        </Center>
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={20} as={FaHandsHelping}></Icon>
            <Text fontSize="xl">{count} Answers</Text>
          </HStack>
        </Center>
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={12} as={FaQuestion}></Icon>
           
          <Link to={`PersonalQuestion` } fontSize="xl">{personalQuestions?.length} Questions</Link>
           
          </HStack>
         
        </Center>
        <Center borderRadius={5} p={2} bgColor="#4b4b4b">
          <HStack>
            <Icon color="green.200" w={20} h={12} as={FaArrowUp}></Icon>
            <Text fontSize="xl">{user?.points} Points</Text>
          </HStack>
        </Center>
      
      </Grid>
    </Center>
  );
}

export default SiteStaus;
