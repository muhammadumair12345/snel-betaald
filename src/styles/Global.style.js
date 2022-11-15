import { GlobalStyles } from "@mui/material";

const globalStyle = (theme) => ({
  "h1,h2,h3,h4,h5,h6,p": {
    margin: 0,
  },
});

const GlobalStyle = () => {
  return <GlobalStyles styles={globalStyle} />;
};

export default GlobalStyle;
