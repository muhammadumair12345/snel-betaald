import React, { useContext } from "react";
import DebitBalance from "../../components/DebitBalance";
import ToggleButton from "../../components/ToggleButton";
import NavBar from "./NavBar";
import { HeaderBox } from "./Header.style";
import { ToggleContext } from "../../contexts/ToggleContext";

const Header = () => {
  const { toggle } = useContext(ToggleContext);
  return (
    <HeaderBox toggle={toggle}>
      <NavBar />
      <DebitBalance />
      <ToggleButton />
    </HeaderBox>
  );
};

export default Header;
