import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: { borderRadius: 6 },
  typography: {
    button: { textTransform: "capitalize", fontWeight: "bold" },
  },
  palette: {
    primary: {
      main: "#4263EB",
    },
    secondary: {
      main: "#25B583",
      contrastText: "#fff",
    },
    light: {
      main: "#fff",
    },
  },
});

export default theme;
