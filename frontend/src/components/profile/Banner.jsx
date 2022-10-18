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
import { useAuth } from "../../Context/AuthContext";
  import homeimg from "../../images/Svg/user-svgrepo-com.svg";

  function Home() {
   
    const { currentUSer } = useAuth();
   
    console.log(currentUSer.photoURL);
    return (
      <Box >
        <Grid p={10} h="40vh" templateColumns="repeat(2, 1fr)" gap="0">
          <Center w="110%" h="70%">
            {" "}
            <VStack>
              <Text  fontWeight="bold" fontSize="5xl" >
                {currentUSer.displayName},{" "}
               
              </Text>{" "}
                <Text font="Rubik" fontWeight="bold" fontSize="6xl" color="green.200">
                {" "}
            190042128
              </Text>
             
              <Button size="lg">Explore</Button>
            </VStack>
          </Center>
          <Center w="100%">
            <Image
            borderRadius="full"
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
  