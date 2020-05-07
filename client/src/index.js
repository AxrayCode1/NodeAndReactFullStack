import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import axios from 'axios';

import 'materialize-css/dist/css/materialize.min.css';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>    
);

ReactDom.render(app, document.getElementById('root'));