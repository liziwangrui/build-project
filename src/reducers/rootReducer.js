/**
 * Created by wr on 16/5/27.
 */
import {combineReducers} from 'redux';
import site from "./siteReducer.js";


var rootReducer = combineReducers({
    site
});

module.exports = rootReducer;