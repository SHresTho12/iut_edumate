import {
  ChakraProvider,
  Center,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  VStack,
  HStack,
  
  Button
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Flip";
import content from "../components/Content";
import theme from "./theme";
import { Layout } from "../components/Layout";
import { Side } from "../components/AcademicSidebar";
import NotesFeed from "./Resources/NotesFeed";
import { Link } from 'react-router-dom'

function createEntry(entry) {
  return <Card />;
}
const IMAGE = "/images/art.jpg";
const IMAGE1 = "/images/photo.jpg";
const IMAGE2 = "/images/pub.jpg";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Tabs isFitted variant="soft-rounded" colorScheme="green">
          <TabList marginBlockStart="2em">
            <Tab fontSize={"23px"}>Notes</Tab>
            <Tab fontSize={"23px"}>Question Bank</Tab>
            <Tab fontSize={"23px"}>Important Links</Tab>
            <Tab fontSize={"23px"}>Lab Works</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack>
              <VStack width='40%' height='100vh'>
              <Button height='8vh' bgColor={'green.200'} _hover={{bg:'green.300'}}><Link to='/addnote'>Post a Note</Link></Button>
                <Image
                  src="/images/note.gif"
                  alt="s"
                  height="80vh"
                  sx={{ filter: "blur(0px)" }}
                /></VStack>
                <Box w="50%"><NotesFeed ></NotesFeed></Box>
              </HStack>
            </TabPanel>
            <TabPanel>
              <Image
                src="/images/bank.gif"
                alt="s"
                height="80vh"
                sx={{ filter: "blur(0px)" }}
              />
            </TabPanel>
            <TabPanel>
              <Image
                src="/images/link.gif"
                alt="s"
                height="80vh"
                sx={{ filter: "blur(0px)" }}
              />
            </TabPanel>
            <TabPanel>
              <Image
                src="/images/lab.gif"
                alt="s"
                height="80vh"
                sx={{ filter: "blur(0px)" }}
              />
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
