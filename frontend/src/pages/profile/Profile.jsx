import { Box,ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Banner from '../../components/profile/Banner'
import PersonalQuestions from '../../components/profile/PersonalQuestions'
import Projects from '../../components/profile/Projects'
import SiteStaus from '../../components/profile/SiteStaus'
import { Layout } from '../../components/ProLayout'
import { useAuth } from '../../Context/AuthContext'
import theme from "../theme";
import Navlink from "../../components/Navlink";
function Profile() {
    const { currentUSer} = useAuth()
    const id = currentUSer.uid;
    const [dbuser , setDbuser] = useState('')
    const [questions,setQuestions] = React.useState([])
  useEffect(() => {
  async function getQuestion() {
    await axios.get("/askquestion").then((res) => {
      setQuestions(res.data.reverse());
      //console.log(res.data)
    });
  }
  getQuestion();
}, []);



useEffect(() => {
  async function getUser() {
    await axios.get(`/user/${id}`).then((res) => {
      setDbuser(res.data);
      console.log("hi",res.data.data)
      console.log(res.data.data)
    });
  }
  getUser();
},[])



let personalQuestions = questions.filter((question) => question.user.uid === currentUSer.uid )
console.log(personalQuestions);
  return (
    <ChakraProvider theme={theme}>
    <Layout><Box >
         <Banner user={dbuser}></Banner>
          <SiteStaus personalQuestions={personalQuestions}></SiteStaus>
          <Navlink
          to="/pro"
          name="Projects"
          bgColor="#4AA96C"
          color="white"
          _hover={{bg:'#3B8756'}}
        />
          <Projects></Projects>
    
          <PersonalQuestions personalQuestions={personalQuestions}></PersonalQuestions>
    </Box>
         
    </Layout>
    </ChakraProvider>
  
  )
}

export default Profile