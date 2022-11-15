import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Form } from "../../styles/Form.style";

const initialData = {
  pasnummer: "",
  euro: "",
  credits: "",
};

const TopupForm = () => {
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
        name="pasnummer"
        type="number"
        label="RFID Pasnummer"
        required
        onChange={handleChange}
        value={form.pasnummer}
        size="small"
      />
      <TextField
        name="euro"
        type="number"
        label="Euro"
        required
        onChange={handleChange}
        value={form.euro}
        size="small"
      />
      <TextField
        name="credits"
        type="number"
        label="Credits"
        required
        onChange={handleChange}
        value={form.credits}
        size="small"
      />
      <Button type="submit" size="large" variant="contained">
        Pay
      </Button>
    </Form>
  );
};

export default TopupForm;
