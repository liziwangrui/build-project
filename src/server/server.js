/**
 * Created by wr on 16/5/27.
 */
'use strict';


var config = require('../common/config.js');
var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/../../public', {maxAge: 0}));
app.get('*',function(req,res) {
    res.render('index',{})
});
app.listen(config.port);
// 错误
process.on('uncaughtException', function (err) {
    console.error('Global:');
    console.error(err);
    process.exit(0);
});

console.log('server starting on port: %d', config.port);