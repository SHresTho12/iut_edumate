
import {
   
     ChakraProvider,
     Center,
     Box,
     Tabs, TabList, TabPanels, Tab, TabPanel
    
    
   } from "@chakra-ui/react";
   import React from "react";
import Card from "../components/Flip";
import content from "../components/Content";
import theme from "./theme";
import { Layout } from "../components/Layout";
import { Side } from "../components/AcademicSidebar";

function createEntry(entry) {
  return <Card  />;
}
const IMAGE =
     '/images/art.jpg';
     const IMAGE1 =
     '/images/photo.jpg';
     const IMAGE2 =
     '/images/pub.jpg';

function App() {
  return (
     <ChakraProvider theme={theme}>
     <Layout>
     
<Tabs isFitted variant='enclosed'>
  <TabList marginBlockStart='2em' >
    <Tab fontSize={'23px'}>Post Resource</Tab>
    <Tab fontSize={'23px'}>Get Resource</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Center>Notes</Center>
      <Center>Question Bank</Center>
      <Center>Important Links</Center>
      <Center>Lab Works</Center>
    </TabPanel>
    <TabPanel>
    <Center>Notes</Center>
      <Center>Question Bank</Center>
      <Center>Important Links</Center>
      <Center>Lab Works</Center>
    </TabPanel>
  </TabPanels>
</Tabs>
    {/* <div>
      <h1>
        <Center as="Box" alignContent={'center'} height='7vh' bgColor='blue.100' marginBlockStart={'2vh'} fontSize={'2xl'}>Need Study Help?</Center>
       
      </h1>

      <Center
        className="container-fluid"
        style={{ display: "flex", flexWrap: "wrap", margin: "10px 130px" }}
      >
    {content.map((sample) => (<Card sample={sample} />))}
        
      </Center>
    </div> */}
    </Layout>

</ChakraProvider>
  );
}

export default App;
