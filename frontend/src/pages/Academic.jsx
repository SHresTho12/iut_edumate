
import {
   
     ChakraProvider,
     Center,
     Box
    
    
   } from "@chakra-ui/react";
   import React from "react";
import Card from "../components/Flip";
import content from "../components/Content";
import theme from "./theme";
import { Layout } from "../components/Layout";

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
    <div>
      <h1>
        <Center as="Box" alignContent={'center'} height='7vh' bgColor='blue.100' marginBlockStart={'2vh'} fontSize={'2xl'}>Need Study Help?</Center>
        {/* <Center as="Box" alignContent={'center'} height='7vh'  bgColor='teal.100' marginBlockStart={'2vh'} fontSize={'xl'}>Go get it!</Center> */}
      </h1>

      <div
        className="container-fluid"
        style={{ display: "flex", flexWrap: "wrap", margin: "10px 130px" }}
      >
    {content.map((sample) => (<Card sample={sample} />))}
        
      </div>
    </div>
    </Layout>

</ChakraProvider>
  );
}

export default App;
