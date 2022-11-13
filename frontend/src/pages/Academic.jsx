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
  Button,Link,GridItem
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Flip";
import content from "../components/Content";
import theme from "./theme";
import { Layout } from "../components/Layout";
import { Side } from "../components/AcademicSidebar";
import NotesFeed from "./Resources/NotesFeed";

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
        <Tabs isFitted variant="soft-rounded" colorScheme={'#cacee0'}>
          <TabList marginBlockStart="2em">
            <Tab fontSize={"23px"} >Notes</Tab>
            <Tab fontSize={"23px"}>Question Bank</Tab>
            <Tab fontSize={"23px"}>Important Links</Tab>
            <Tab fontSize={"23px"}>Lab Works</Tab>
          </TabList>
          <TabPanels>
            <TabPanel >
          
              <HStack >
            
                <Box w="100%"><NotesFeed ></NotesFeed></Box>
             <VStack > 
             <Button h='10vh' width='18vw' ><Link  to='/addnote'>Post a Note</Link></Button>
             <GridItem   shadow='4xl'  width='90%' height='50%' colSpan={2}  borderRadius='8px' >
             
           
             <Image
                  src="/images/postnote.jpg"
                  alt="s"
                  height="80vh"
                  sx={{ filter: "blur(0px)" }}
                />
           </GridItem>
             
              
                </VStack>
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
