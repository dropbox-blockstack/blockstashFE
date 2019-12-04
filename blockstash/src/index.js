import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.js';
// Redux Imports
import {createStore, applyMiddleware} from 'redux';
import {Privider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Setting up Redux
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

// Require Sass file so webpack can build it
// import 'bootstrap/dist/css/bootstrap.css';
// import'./styles/style.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);