import React from 'react';
import './App.css';
import {createGlobalStyle,ThemeProvider} from "styled-components";
import Services from './pages/Services'


const theme = {
  green: '#8DC63F',
  blue: '#1B065E'
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <Services />
      </ThemeProvider>
    </div>
  );
}

export default App;


