/**
 * Created by wr on 16/5/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'store/store.js';
var history = require('history').createHistory();
var router = require('./router')(history);

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
);