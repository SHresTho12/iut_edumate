import { Box, VStack, Heading, Center, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EmailSend from "../../pages/fileshare/EmailSend";
import { useAuth } from '../../Context/AuthContext';
function Uploadbox({id,uid}) {
  const {currentUser} = useAuth();
  const [dragActive, setDragActive] = React.useState(false);
  const [file,setFile] = useState(null);
  const [semester, setSemester] = useState("2-2");
  const [fileId, setFileId] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  // console.log(currentUser);
  // const userId = currentUser.uid;
  // console.log(userId);
  function updateStatus(){
    //axios put request to update the status of the request
    axios.put(`/request/complete/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));

  }
  function updatePoint(){
    //axios put request to update the status of the request
    axios.put(`/points/update/${uid}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  function updateUUID(uuid){
    //axios put request to update the status of the request
    axios.put(`/request/uuid/${id}`,{uuid:uuid})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));

  }

  const uploadFile = (e) => {
    e.preventDefault();
   

const formData = new FormData();
formData.append("myfile", file);
formData.append("semester", semester);

 axios
      .post(`/file/upload/${id}`, formData, {
        // Set the content type to 'multipart/form-data'
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response.data)
        updateStatus();
        setFileId(response.data.uuid);
        setSendEmail(true);
        updatePoint();
        updateUUID(response.data.uuid);
      })


  };

   const handleChange = event => {
    setFile(event.target.files[0])
  }

  //drop function for handling file upload
  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e);
    e.stopPropagation();

    // Get the files that were dropped
    const files = e.dataTransfer.files;
    if (files.length > 0) {
     setFile(files[0]) ;
      console.log(file);
    }

    // Do something with the files (e.g. upload them to a server)
  };
  const handleDrag = (e) => {
    e.preventDefault();

    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  return (
    <Box m={10} borderRadius={10} boxShadow="xl" width="60%" p={10}>
      <Box
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        border="dashed"
        borderColor="blue.200"
        className="drop-zone"
      >
        <VStack>
          <Heading m="2" p="2" className="drop-zone__prompt">
            Select your file here to upload
          </Heading>
          <Center>
            <Input m={4} type="file" name="file" onChange={handleChange} />
          </Center>
         
          
            <Center>
              <Button m={4} onClick={uploadFile}>Upload</Button>
              
            </Center>
         

        </VStack>
      </Box>
      {sendEmail && <EmailSend uuid={fileId}></EmailSend>}
    </Box>
  );
}

export default Uploadbox;
