/**
 * Created by wr on 16/5/27.
 */
import React from "react";
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../../mixin/bind.js';
var Home = React.createClass({
    componentDidMount: function () {
        this.props.siteAction.fetchSite(1)
    },
    render: function () {
        console.log(this.props.siteInfo);
        return (
            <div>
                <h1>home</h1>
                <h2>{this.props.siteInfo.siteInfo.name}</h2>
            </div>
        )
    }
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);