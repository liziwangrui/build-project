/**
 * Created by wr on 16/5/27.
 */
import React from 'react';
import { Router, Route, IndexRoute, Redirect,browserHistory } from 'react-router';
import config from '../common/config';

import Home from "../containers/Home";

module.exports = (function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={Home} />
        </Router>
    )
});