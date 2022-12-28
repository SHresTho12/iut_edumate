import { Box, VStack, Heading, Center, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
function Uploadbox({id}) {
  const [dragActive, setDragActive] = React.useState(false);
  const [file,setFile] = useState(null);
  const [semester, setSemester] = useState("2-2");

  const uploadFile = (e) => {
    e.preventDefault();
    // const fileToBeUploaded = file.current.files[0];
    // const formData = new FormData();
    // formData.append("file", fileToBeUploaded);
    // console.log(formData);
    // const xyz = XMLHttpRequest();
    // xyz.onreadystatechange = () => {
    //   console.log(xyz.readyState);
    // };

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
            Drop files here to upload
          </Heading>
          <Center>
            <Input m={4} type="file" name="file" onChange={handleChange} />
          </Center>
         
          
            <Center>
              <Button m={4} onClick={uploadFile}>Upload</Button>
            </Center>
         

        </VStack>
      </Box>
    </Box>
  );
}

export default Uploadbox;
