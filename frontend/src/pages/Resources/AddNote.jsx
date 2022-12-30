import { Box,HStack, VStack,FormLabel,FormControl,Menu, Heading, Input, Badge, Button, Center ,MenuItem , MenuButton , MenuList} from "@chakra-ui/react";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import axios from "axios";
import ReactQuill from "react-quill";
import {useHistory} from 'react-router-dom'




import { useAuth } from "../../Context/AuthContext";
function AskQuestion() {

const { currentUSer, setAlert } = useAuth()
const [title,setTitle] = useState("")
const [body,setBody] = useState("")
const [department,setDepartment] = useState("")
const [semester,setSemester] = useState("")
const [course,setCourse] = useState("")
const [loading,setLoading] = useState(false);
const history = useHistory()
const userId = currentUSer.uid;
const handleQuill = (value) => {
  setBody(value);
  console.log(body);
};


  function updatePoint(){
    //axios put request to update the status of the request
    axios.put(`/points/update/${userId}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }


const handleSubmit = async (e) => {
  e.preventDefault();

  if (title !== "" && body !== "") {
    setLoading(true);
    const bodyJSON = {
      title: title,
      body: body,
      course: course,
      semester: semester,
      department: department,
      user: currentUSer,
    };
    await axios
      .post("/notes", bodyJSON)
      .then((res) => {
        // console.log(res.data);
        alert("Note added successfully");
        setLoading(false);
        updatePoint();
        history.push("/academic");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

  return (
    <Layout>
      <Box
        p={10}
      
        align="center"
        borderColor="teal"
        borderRadius="10"
        boxShadow="inner"
        bgColor="#DFF6FF"
      >
        <Heading align="center" m={2} color='#001D6E'>
          Create a Post for New Note
        </Heading>
        <VStack align="left">
          <Box m={3}>
            {/* <Heading my={2} size="md" align="left" color='#001D6E'>
              Title
            </Heading> */}
            <Badge my={2} marginBottom='2vh' p={2} fontSize='x-small' bgColor='#C4DDFF' color='#001D6E' borderRadius={5}>
              Enter a Short Description about the note you are posting
            </Badge>
           
               <Box m={3}>
          
           
              
              <Input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
                h='3.2rem'
                placeholder=' Title of the Notes'
              
                autoComplete=' '
               
               border='2px'
               borderColor='#2D6187'
              
               
              />
              
          </Box>
          <ReactQuill value={body} onChange={handleQuill} theme="snow"></ReactQuill>
              
          </Box>
          
          <Box mt="2" alignItems="left">
            <Heading m={3} size="md" align="left" color='#001D6E'>
              Select options
            </Heading>
            {/* //<ReactQuill className="react-quill" theme="snow" /> */}
            {/* <Editor></Editor> */}
            
            <Center marginBottom='3vh'>


              <VStack>
              <HStack>
                <Heading>Information Added :</Heading>
                <Badge p={2} fontSize='lg' bgColor='#C4DDFF' color='#001D6E' borderRadius={5}>
                  {department?department:"Department"} 
                </Badge>
                <Badge p={2} fontSize='lg' bgColor='#C4DDFF' color='#001D6E' borderRadius={5}>
                  {semester?semester:"Semester"}
                </Badge>
                <Badge p={2} fontSize='lg' bgColor='#C4DDFF' color='#001D6E' borderRadius={5}>
                  {course?course:"Course"}
                </Badge>


              </HStack>
              <HStack>
             <Menu m={4} >
      
        <MenuButton width='40vh' as={Button} bgColor='#9BA3EB' _hover={{bg:'#8b92d3'}}>
          Department
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=> setDepartment('CSE')}>CSE</MenuItem>
          <MenuItem onClick={() => setDepartment('Swe')}>SWE</MenuItem>
          <MenuItem onClick={() => setDepartment('CEE')}>CEE</MenuItem>
          <MenuItem onClick={() => setDepartment('EEE')}>EEE</MenuItem>
          <MenuItem onClick={() => setDepartment('BTM')}>BTM</MenuItem>
          <MenuItem onClick={() => setDepartment('TVE')}>TVE</MenuItem>
        </MenuList>
      </Menu>
      <Menu m={4}>
        <MenuButton  width='40vh' as={Button} bgColor='#80ED99' _hover={{bg:'#73D589'}}>
          Semester
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=> setSemester("1-1")}>1-1</MenuItem>
          <MenuItem onClick={()=> setSemester("1-2")}>1-2</MenuItem>
          <MenuItem onClick={()=> setSemester("2-1")}>2-1</MenuItem>
          <MenuItem onClick={()=> setSemester("2-2")}>2-2</MenuItem>
          <MenuItem>3-1</MenuItem>
          <MenuItem>3-2</MenuItem>
        </MenuList>
      </Menu>
      <Menu m={4}>
        <MenuButton width='40vh' as={Button} bgColor='#90E0EF' _hover={{bg:'#81C9D7'}}>
          Course
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=> setCourse("Software-Security")}>Software-Security</MenuItem>
          <MenuItem onClick={()=> setCourse("SS")}>Server-Programming</MenuItem>
          <MenuItem onClick={()=> setCourse("DP")}>DP</MenuItem>
          <MenuItem onClick={()=> setCourse("Sp Lab")}>Lab Server Program</MenuItem>
          <MenuItem>dummy</MenuItem>
        </MenuList>
        </Menu>





            </HStack>
            

              </VStack>
            
          </Center>
            <Button disabled={loading} type='submit' onClick={handleSubmit} bg="#4A47A3" m={2} color='#EDF7FA' height='9vh' fontSize='large' _hover={{ bg: "#192965" }}>
              {loading?'Adding Question .....' : 'Post Question '}
            </Button>
          </Box>
        
        </VStack>
      </Box>
    </Layout>
  );
}

export default AskQuestion;
