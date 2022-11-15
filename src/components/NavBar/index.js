import React from "react";
import Logo from "../Logo";
import SelectLanguage from "../SelectLanguage";
import { Box } from "../../styles/Box.style";

const NavBar = () => {
  return (
    <nav>
      <Box justify="space-between" align="center">
        <Logo />
        <SelectLanguage />
      </Box>
    </nav>
  );
};

export default NavBar;
