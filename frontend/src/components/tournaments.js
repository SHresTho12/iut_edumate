import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import theme from "../pages/theme";
import { BsCaretDown } from "react-icons/bs";
import { useState } from "react";
import { useDateSelect } from "react-ymd-date-select";
import FootballNews from "../pages/cocur/FootballNews";

const IMAGE = "/images/art.jpg";
const IMAGE1 = "/images/photo.jpg";
const IMAGE2 = "/images/pub.jpg";

export default function Art() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <FootballNews></FootballNews>
      </Layout>
    </ChakraProvider>
  );
}
