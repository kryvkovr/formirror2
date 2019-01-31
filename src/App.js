import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/navbar" component={Navbar} />
        <Route path="/news" component={News} />
      </Switch>
    </div>
  </ConnectedRouter>
);


export default App;
