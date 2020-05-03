import {register} from './serviceWorker';

import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>    
);

ReactDom.render(app, document.getElementById('root'));
register();