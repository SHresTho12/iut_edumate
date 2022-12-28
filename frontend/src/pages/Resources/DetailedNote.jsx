import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import parse from "html-react-parser";
import { useAuth } from "../../Context/AuthContext";
import {
  Heading,
  HStack,
  VStack,
  Box,
  Stack,
  Tag,
  Text,
  Grid,
  GridItem,
  
  Button,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import theme from "../../components/Query-Section/theme";
function DetailedNote() {
  const { currentUSer } = useAuth();
  const [note, setNote] = useState();
  const [show, setShow] = useState(false);
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  const [comment, setComment] = useState("");
  //functions
  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
        user: currentUSer,
      };
      await axios.post(`/noteComment/${id}`, body).then((res) => {
        setComment("");
        setShow(false);
        getUpdatedAnswer();
        // console.log(res.data);
      });
    }
  };

  useEffect(() => {
    async function getFunctionDetails() {
      await axios
        .get(`/notes/${id}`)
        .then((res) => {
          console.log(res.data);
          setNote(res.data[0]);
        })
        .catch((err) => console.log("The error: " + err.message));
    }
    getFunctionDetails();
  }, [id]);

  async function getUpdatedAnswer() {
    await axios
      .get(`/notes/${id}`)
      .then((res) => setNote(res.data[0]))
      .catch((err) => console.log(err));
  }

  const handleUpvote = async () => {
    const bodyJSON = {
      user: currentUSer,
    };
    await axios
      .put(`/notes/upvote/${id}`, bodyJSON)
      .then((res) => {
        getUpdatedAnswer();
      })
      .catch((err) => alert(" Already Upvoted the answer"));
  };

  const handleDownvote = async () => {
    const bodyJSON = {
      user: currentUSer,
    };
    await axios
      .put(`/notes/downvote/${id}`, bodyJSON)
      .then((res) => {
        getUpdatedAnswer();
      })
      .catch((err) => alert(" Already Downvoted the question"));
  };

  console.log(note);


//handle interested request
  const handleInterested = async () => {
    const bodyJSON = {
      user: currentUSer,
    };
    
    await axios

      .put(`/notes/interested/${id}`, bodyJSON)
      .then((res) => {
        getUpdatedAnswer();
        handlerequest();
        
      })
      .catch((err) => alert(" Already interested"));
      
  };

  const handlerequest = async () => {
     const body = {
      owner: note?.user.uid,
      requester: currentUSer.uid,
      semester: note?.semester,
      course: note?.course,
      title: note?.title,
      department: note?.department,
      resourceID: note?._id,

    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
   //post request to the backend
    await axios
      .post("/request", body , config)
      .then((res) => {
        //alert
        alert("Request sent");

      }
      )
      .catch((err) =>{
        console.log(err);
        
      });



  };






  return (
    <ChakraProvider theme={theme}>
    <Layout>
      <Box>
        <VStack alignItems="left">
          <Box
            p={3}
            bgColor="#C8FFD4"
            borderRadius="10px"
            marginBottom={"1.5vh"}
            marginBlockStart="3vh"
            shadow={"2xl"}
          >
            <Heading>Title :{note?.title}</Heading>
            <Tag mY={1} variant="solid" colorScheme="teal" marginRight={"1vw"}>
              {new Date(note?.created_at).toLocaleString()}
            </Tag>
            {/* <Tag mY={1} variant="solid" colorScheme="teal">
                Answers count: {note?.answerDetails.length}
              </Tag> */}
          </Box>

          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem
              colSpan={1}
              w="100%"
              bg="blue.100"
              borderRadius="10px"
              shadow={"2xl"}
            >
              <Box p={2}>
                <Text size="sm" marginLeft="1vw" marginBlockStart={"1vh"}>
                  Information
                </Text>
                <VStack>
                  <Text fontSize="sm">
                    Posted by : {note?.user.displayName}
                  </Text>
                  <Text fontSize="sm">Liked by : {note?.upvote}</Text>
                  <Text fontSize="sm">Disliked by : {note?.downvote}</Text>
                  <HStack m={2}>
                    <Button
                      onClick={handleUpvote}
                      bgColor="#8af783"
                      _hover={{ bg: "#52eb49" }}
                    >
                      Up vote
                    </Button>
                    <Button
                      onClick={handleDownvote}
                      bgColor="#f75c5c"
                      _hover={{ bg: "#f03535" }}
                    >
                      Down vote
                    </Button>
                  </HStack>
                    <Button
                      onClick={handleInterested}
                      m={2}
                      bgColor="#9c99ff"
                      color={"white"}
                      _hover={{ bg: "#8e8bfc" }}
                    >
                     Request The Resource
                    </Button>
                </VStack>
              </Box>
            </GridItem>
            <GridItem
              w="100%"
              colSpan={4}
              bg="blue.100"
              shadow={"2xl"}
              borderRadius="10px"
            >
              <Box m={2}>
                <Heading as="h3" fontSize={"30px"}>
                  Description
                </Heading>

                <Text> {parse(`${note?.body}`)}</Text>
              </Box>
            </GridItem>
          </Grid>
        </VStack>

        <Box
          m={2}
          bgColor="#D2DAFF"
          marginBlockStart={"1.5vw"}
          borderRadius="10px"
          boxShadow={"2xl"}
        >
          <Box>
            <Heading as="h2" marginLeft={"1vw"} fontSize={"30px"}>
              {" "}
              Comments
            </Heading>
            <Box p={2} borderRadius="10">
              <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem
                  p={2}
                  colSpan={1}
                  w="100%"
                  borderRight="1px solid"
                  borderRadius="1"
                >
                  <Box>
                    <Text>Stats of the question</Text>
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                        boxShadow: "2xl",
                      }}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <Button
                      onClick={handleComment}
                      m={2}
                      bgColor="#9c99ff"
                      color={"white"}
                      _hover={{ bg: "#8e8bfc" }}
                    >
                      Comment
                    </Button>
                  </Box>
                </GridItem>

                <GridItem p={2} w="100%" colSpan={4}>
                  {note?.noteComments &&
                    note?.noteComments.map((_qd) => (
                      <Box key={_qd?._id}>
                        {_qd.comment} <br></br>
                        <span>
                          - {_qd.user ? _qd.user.displayName : "Nate Eldredge"}
                        </span>{" "}
                        {"    "}
                        <small>
                          {new Date(_qd.created_at).toLocaleString()}
                        </small>
                      </Box>
                    ))}
                </GridItem>
              </Grid>
              
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Layout>
  </ChakraProvider>
  );
}

export default DetailedNote;
