import React, { useContext } from "react";
import { Button } from "@mui/material";
import { ButtonsBox } from "./ToggleButton.style";
import { ToggleContext } from "../../contexts/ToggleContext";

const ToggleButton = () => {
  const { setToggle, toggle } = useContext(ToggleContext);

  return (
    <ButtonsBox>
      {["Topup Card", "Request Refund"].map((text, index) => (
        <Button
          key={index}
          onClick={() => setToggle(index)}
          variant={toggle === index ? "contained" : "outlined"}
          color="secondary"
        >
          {text}
        </Button>
      ))}
    </ButtonsBox>
  );
};

export default ToggleButton;
