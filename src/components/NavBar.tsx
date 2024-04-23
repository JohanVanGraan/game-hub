/** @format */

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => (
  <HStack justifyContent='space-between' padding='10px'>
    <Image src={logo} id='ilogo' boxSize='60px'></Image>
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
