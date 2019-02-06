import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import configureStore, { history } from './store';
import { userLoggedIn } from './actions/auth';

const store = configureStore();

// check authorization
if (localStorage.bookwormJWT) {
  const user = { token: localStorage.bookwormJWT };
  store.dispatch(userLoggedIn(user));
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
