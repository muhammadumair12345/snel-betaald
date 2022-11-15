import React from "react";
import DebitBalance from "../../components/DebitBalance";
import ToggleButton from "../../components/ToggleButton";
import NavBar from "./NavBar";
import { HeaderBox } from "./Header.style";

const Header = () => {
  return (
    <HeaderBox>
      <NavBar />
      <DebitBalance />
      <ToggleButton />
    </HeaderBox>
  );
};

export default Header;
