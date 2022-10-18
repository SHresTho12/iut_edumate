import {
  Box,
  Grid,
  Image,
  GridItem,
  Heading,
  Text,
  Center,
  VStack,
  Button,
  ChakraProvider
} from "@chakra-ui/react";
import React from "react";
import homeimg from "../../images/Svg/homg-img.svg";
import theme from '../../pages/theme'
function Home() {
  return (
    <ChakraProvider theme={theme}>
    
    <Box>
      <Grid p={10} h="70vh" templateColumns="repeat(2, 1fr)" gap="0">
        <Center w="110%" h="70%">
          {" "}
          <VStack>
            <Text  fontWeight="bold" fontSize="7xl" color="white" fontFamily={'initial'}>
              IUT{" "}
             
            </Text>{" "}
              <Text font="Rubik" fontWeight="bold" fontSize="8xl" color="#2db73e" fontFamily={'initial'}>
              {" "}
             EduMate
            </Text>
           
            <Button size="lg">Explore</Button>
          </VStack>
        </Center>
        <GridItem w="100%">
          <Image
    boxSize='70%'
    objectFit='cover'
    src={homeimg}
    alt='Dan Abramov'
  />
          {/* <img src={homeimg}></img> */}
        </GridItem>
      </Grid>
    </Box>
    </ChakraProvider>

    //     <section className="home" id="home">

    //    <div className="row">

    //       <div className="content">
    //          <h3>online <span>education</span></h3>
    //          <a href="#contact" className="btn">contact us</a>
    //       </div>

    //       <div className="image">
    //          <Image src={homeimg}></Image>
    //       </div>

    //    </div>

    // </section>
   
  );
}

export default Home;
