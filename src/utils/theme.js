import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: { borderRadius: 25 },
  typography: {
    button: {
      fontSize: "14px",
    },
  },
  palette: {
    primary: {
      main: "#25B583",
    },
  },
});

export default theme;
