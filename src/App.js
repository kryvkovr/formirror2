import React from 'react';
import { Route, Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import About from './components/About/About';
import Login from './components/Login/Login';

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </ConnectedRouter>
);


export default App;
