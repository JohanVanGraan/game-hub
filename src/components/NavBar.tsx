/** @format */

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "../SearchInput";

const NavBar = () => (
  <HStack justifyContent='space-between' padding='10px'>
    <Image src={logo} id='ilogo' boxSize='60px'></Image>
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
