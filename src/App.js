import React from 'react';
import './App.css';
import {BrowserRouter as HashRouter, Switch, Route} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import  Home from './pages/Home';
import {About} from './pages/About';
import Portfolio from "./pages/Portfolio/";
import { Menu } from "./pages/Menu/";
import  OurServices  from "./pages/OurServices/";
import Contact from "./pages/Contact/"
import {ServicesHelper as Services } from "./pages/Helpers";

const theme = {
    green: '#8DC63F',
    blue: '#1B065E'
};


function App() {
  return (
    <HashRouter basename="/woopix/">
      <Switch>
        <div className="App">
          <ThemeProvider theme={theme}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/tarifs-sites" component={Services(false)}/>
          <Route exact path="/gestion-reseaux-sociaux" component={Services(true)}/>
          <Route exact path="/nos-services" component={OurServices} />
          <Route exact path="/contact" component={Contact} />
          </ThemeProvider>
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;


