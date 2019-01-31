import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

import configureStore, { history } from './store';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        document.getElementById('root')
    )
}

render();