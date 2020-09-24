import React from 'react';
import './App.css';
import { Home } from './pages/Home/index.js';
import { About } from './pages/About/index.js';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>

      </Switch>

    </HashRouter>
  );
}

export default App;
