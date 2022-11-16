import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
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
      <TextField
        name="name"
        label="Your Name"
        required
        onChange={handleChange}
        value={form.name}
        size="small"
      />
      <TextField
        name="phone"
        type="tel"
        label="Phone Number"
        required
        onChange={handleChange}
        value={form.phone}
        size="small"
      />
      <TextField
        name="email"
        type="email"
        label="Email"
        required
        onChange={handleChange}
        value={form.email}
        size="small"
      />

      <TextField
        name="city"
        label="City"
        required
        onChange={handleChange}
        value={form.city}
        size="small"
      />
      <TextField
        name="iban"
        label="IBAN"
        required
        onChange={handleChange}
        value={form.iban}
        size="small"
      />
      <TextField
        name="pasnummer"
        type="number"
        label="RFID Pasnummer"
        required
        onChange={handleChange}
        value={form.pasnummer}
        size="small"
      />
      <TextField
        name="cvc"
        type="number"
        label="RFID CVC"
        required
        onChange={handleChange}
        value={form.cvc}
        size="small"
      />
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
