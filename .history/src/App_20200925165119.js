import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import {createGlobalStyle,ThemeProvider} from "styled-components";
import Services from './pages/Services'
import  Home  from './pages/Home';
import { About } from './pages/About';
import  Portfolio  from "./pages/Portfolio/";
import { Menu } from "./pages/Menu/";
import  OurServices  from "./pages/OurServices/";



const theme = {
  green: '#8DC63F',
  blue: '#1B065E'
};



function App() {
  return (
    <HashRouter basename="/woopix"> 
      <Switch>
        <div className="App">
          <ThemeProvider theme={theme}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/nos-services" component={OurServices} />
          </ThemeProvider>
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;


