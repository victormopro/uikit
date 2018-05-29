import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Main';
import Navbar from './Navbar';
import Home from '../pages/Home';
import AIEditor from '../pages/AIEditor';
import Blueprint from '../pages/Blueprint';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Main>
            <Route exact path="/" component={Home} />
            <Route path="/aieditor" component={AIEditor} />
            <Route path="/blueprint" component={Blueprint} />
          </Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
