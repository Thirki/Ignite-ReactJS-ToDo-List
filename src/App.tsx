import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { Main } from "./pages";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
