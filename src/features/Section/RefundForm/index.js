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
import { Box } from "../../../styles/Box.style";

const initialData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  iban: "",
  pasnummer: "",
  cvc: "",
};

const RefundForm = () => {
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
      <Box wrap="wrap">
        <TextField
          fullWidth={matches}
          name="name"
          label="Your Name"
          required
          onChange={handleChange}
          value={form.name}
          size="small"
        />
        <TextField
          fullWidth={matches}
          name="phone"
          type="tel"
          label="Phone Number"
          required
          onChange={handleChange}
          value={form.phone}
          size="small"
        />
        <TextField
          fullWidth={matches}
          name="email"
          type="email"
          label="Email"
          required
          onChange={handleChange}
          value={form.email}
          size="small"
        />

        <TextField
          fullWidth={matches}
          name="city"
          label="City"
          required
          onChange={handleChange}
          value={form.city}
          size="small"
        />
        <TextField
          fullWidth={matches}
          name="iban"
          label="IBAN"
          required
          onChange={handleChange}
          value={form.iban}
          size="small"
        />
        <TextField
          fullWidth={matches}
          name="pasnummer"
          type="number"
          label="RFID Pasnummer"
          required
          onChange={handleChange}
          value={form.pasnummer}
          size="small"
        />
        <TextField
          fullWidth={matches}
          name="cvc"
          type="number"
          label="RFID CVC"
          required
          onChange={handleChange}
          value={form.cvc}
          size="small"
        />
      </Box>
      <Box align="center" gap="0">
        <FormControlLabel control={<Checkbox />} />
        <div>
          I accept to agree with the <Link>Terms & Conditions</Link>
        </div>
      </Box>
      <Button type="submit" size="large" variant="contained">
        Send Request
      </Button>
    </Form>
  );
};

export default RefundForm;
