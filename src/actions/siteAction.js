/**
 * Created by wr on 16/5/27.
 */
import fetch from 'isomorphic-fetch';
import ActionTypes from '../constants/actionType.js';
import Config from 'common/config.js';

exports.requestSite = function (cityId) {
    return {
        type: ActionTypes.REQUEST_SITE,
        cityId
    };
};

exports.receivedSite = function (cityId,res) {
    return {
        type: ActionTypes.RECEIVE_SITE,
        cityId: cityId,
        siteInfo: res.data
    };
};
exports.fetchSite = function (cityId) {
    return function (dispatch) {
        dispatch(exports.requestSite(cityId));
        return fetch(`${Config.adminApiUrl}/api/site/${cityId}`)
                .then(res => res.json())
        .then(json =>(dispatch(exports.receivedSite(cityId, json))))

    };
};