import {
    Box,
    Grid,
    Image,
    GridItem,
    Heading,
    Text,
    Center,
    VStack,
    Button
  } from "@chakra-ui/react";
  import React from "react";
  import {useHistory} from 'react-router-dom'
  import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
  import homeimg from "../../images/Svg/user.png";
  import { useState } from 'react'

  function Home({dbuser}) {
   
    const btnRef = React.useRef()
    const {  currentUSer } = useAuth()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
     const [studentid, setStudentid] = useState('');
     const [departmentname, setDepartmentname] = useState('');
     const [program, setProgram] = useState('');
    const history = useHistory()
   


    const [loading,setLoading] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (currentUSer) {
        setLoading(true);
        const bodyJSON = {
        fireuid : currentUSer.uid,
       name:currentUSer.name,
       email:currentUSer.email,
       department: departmentname,
       studentid:studentid,
       program:setProgram,
       user: currentUSer
        };
        await axios
          .post("/user", bodyJSON)
          .then((res) => {
            // console.log(res.data);
            alert("User Updated");
            setLoading(false);
            history.push("/profile");
          })
          .catch((err) => {
            console.log(err);
            alert(err.message);
          });
      }
    };
   
    console.log(dbuser);
    return (
      <Box >
        <Grid p={10} h="40vh" templateColumns="repeat(2, 1fr)" gap="0">
          <Center w="110%" h="70%">
            {" "}
            <VStack>
              <Text  fontWeight="bold" fontSize="5xl" >
                {currentUSer.name}{" "}
               
              </Text>{" "}
                <Text font="Rubik" fontWeight="bold" fontSize="4xl" color="green.300">
                {" "}
                {currentUSer.email}{" "}
              </Text>
             
              <Button size="lg">Explore</Button>
            </VStack>
          </Center>
          <Center w="100%">
            <Image
            borderRadius="20"
            size="40%"
      boxSize='40%'
      objectFit='cover'
      src={homeimg}
      alt='Dan Abramov'
    />
            {/* <img src={homeimg}></img> */}
          </Center>
        </Grid>
      </Box>
  
      
    );
  }
  
  export default Home;
  