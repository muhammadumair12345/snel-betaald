import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      marginTop: "0.5rem",
    },
  },
};

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Urdu" },
];

const initialData = { language: "English" };

const SelectLanguage = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormControl size="small">
      <Select
        onChange={handleChange}
        color="light"
        value={data?.language}
        name="language"
        sx={{
          border: "1px solid #fff",
          color: "#fff",
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        MenuProps={MenuProps}
      >
        {languages.map((language) => (
          <MenuItem key={language?.id} value={language?.name}>
            {language?.name?.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLanguage;
