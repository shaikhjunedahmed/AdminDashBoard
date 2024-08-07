import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Dashboard from "./component/Dashboard";
import NavBar from "./component/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
