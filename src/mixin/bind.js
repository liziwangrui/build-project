/**
 * Created by wr on 16/5/27.
 */
import {bindActionCreators} from 'redux';
import actions from '../actions/rootAction';

const mapStateToProps = (state) => ({
    siteInfo: state.site
});

const mapDispatchToProps = (dispatch) => ({
    siteAction: bindActionCreators(actions.site, dispatch),
    //more
});

module.exports = {
    mapStateToProps,
    mapDispatchToProps
};