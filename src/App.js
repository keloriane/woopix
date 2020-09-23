import React from 'react';
import './App.css';
import Services from './pages/Services'
import {createGlobalStyle,ThemeProvider} from "styled-components";


const theme = {
  main: "green"
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <Services></Services>
      </ThemeProvider>
    </div>
  );
}

export default App;


