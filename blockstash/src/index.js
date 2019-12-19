import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.js';
// Redux Imports
import {createStore, applyMiddleware} from 'redux';
import { reducer } from './Redux/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Bootstrap Import
import 'bootstrap/dist/css/bootstrap.min.css';
// Setting up Redux
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);