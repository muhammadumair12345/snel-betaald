import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Form } from "../../../styles/Form.style";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Box } from "../../../styles/Box.style";

const initialData = {
  pasnummer: "",
  euro: "",
  credits: "",
};

const TopupForm = () => {
  const matches = useMediaQuery("(max-width: 550px)");
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clear();
  };

  const clear = () => {
    setForm(initialData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <Box direction="column">
          <TextField
            name="pasnummer"
            type="number"
            label="RFID Pasnummer"
            required
            onChange={handleChange}
            value={form.pasnummer}
            size="small"
          />
          <Box align="center" direction={matches && "column"}>
            <TextField
              fullWidth
              name="euro"
              type="number"
              label="Euro"
              required
              onChange={handleChange}
              value={form.euro}
              size="small"
            />
            {!matches ? (
              <SwapHorizIcon sx={{ fontSize: "2rem" }} />
            ) : (
              <SwapVertIcon sx={{ fontSize: "2rem" }} />
            )}
            <TextField
              fullWidth
              name="credits"
              type="number"
              label="Credits"
              required
              onChange={handleChange}
              value={form.credits}
              size="small"
            />
          </Box>
          <Box align="center" gap="0">
            <FormControlLabel control={<Checkbox />} />
            <div>
              I accept to agree with the <Link>Terms & Conditions</Link>
            </div>
          </Box>
        </Box>
      </Box>
      <Button type="submit" size="large" variant="contained">
        Pay
      </Button>
    </Form>
  );
};

export default TopupForm;
