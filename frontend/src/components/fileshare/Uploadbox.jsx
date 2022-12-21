import { Box, VStack, Heading, Center, Input } from "@chakra-ui/react";
import React from "react";

function Uploadbox() {
  const [dragActive, setDragActive] = React.useState(false);
  let file = React.useRef(null);

  const uploadFile = (e) => {
    e.preventDefault();
    const fileToBeUploaded = file.current.files[0];
    const formData = new FormData();
    formData.append("file", fileToBeUploaded);
    console.log(formData);
    const xyz = XMLHttpRequest();
    xyz.onreadystatechange = () => {
      console.log(xyz.readyState);
    };
  };

  //drop function for handling file upload
  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e);
    e.stopPropagation();

    // Get the files that were dropped
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      file = files[0];
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
            <Input m={4} type="file" className="drop-zone__input" />
          </Center>
        </VStack>
      </Box>
    </Box>
  );
}

export default Uploadbox;
