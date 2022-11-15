import { createContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import GlobalStyle from "../styles/Global.style";

export const ThemeContext = createContext("");

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <MUIThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          {children}
        </EmotionThemeProvider>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
