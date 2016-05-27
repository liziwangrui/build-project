/**
 * Created by wr on 16/5/27.
 */
var ActionTypes = require('../constants/actionType');

function site(state, action) {
    if (!state) {
        state = {
            siteInfo: {}
        };
    }
    switch (action.type) {
        case ActionTypes.REQUEST_SITE:
            return {
                ...state,
            };
        case ActionTypes.RECEIVE_SITE:
            return Object.assign({},state,{
                siteInfo: action.siteInfo
            });
        default :
            return state;
    }
}
module.exports = site;