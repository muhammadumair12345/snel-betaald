import React, { useContext } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { ButtonsBox } from "./ToggleButton.style";
import { ToggleContext } from "../../contexts/ToggleContext";
import { Box } from "../../styles/Box.style";

const ToggleButton = () => {
  const matches = useMediaQuery("(max-width: 550px)");
  const { setToggle, toggle } = useContext(ToggleContext);

  return (
    <Box
      justify={matches ? "center" : "space-between"}
      direction={matches && "column"}
      align={matches && "center"}
    >
      <ButtonsBox style={{ order: matches ? 2 : 1 }}>
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
      {toggle ? (
        <Typography variant="body2" order={matches ? 1 : 2}>
          An amount of $5 will be deducted on each refund
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ToggleButton;
