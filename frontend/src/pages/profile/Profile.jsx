import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import Banner from '../../components/profile/Banner'
import PersonalQuestions from '../../components/profile/PersonalQuestions'
import Projects from '../../components/profile/Projects'
import SiteStaus from '../../components/profile/SiteStaus'
import { Layout } from '../../components/ProLayout'
import { useAuth } from '../../Context/AuthContext'
function Profile() {
    const { currentUSer} = useAuth()
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
let personalQuestions = questions.filter((question) => question.user.uid === currentUSer.uid )
console.log(personalQuestions);
  return (
    <Layout><Box >
         <Banner></Banner>
          <SiteStaus></SiteStaus>
          <Projects></Projects>
    
          <PersonalQuestions personalQuestions={personalQuestions}></PersonalQuestions>
    </Box>
         
    </Layout>
  
  )
}

export default Profile