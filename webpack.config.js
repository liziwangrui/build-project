/**
 * Created by wr on 16/5/27.
 */
var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public');
var autoprefixer = require('autoprefixer');
var precss = require('precss');


var ExtractTextPlugin = require("extract-text-webpack-plugin");
var uglifyJs = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});


// 开发环境

exports.development = {
    entry: {
        index: path.resolve(APP_PATH, 'scripts/index.js'),
    },

    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js',
    },

    resolve: {
        root: APP_PATH,
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!postcss-loader!sass',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|woff)$/,
                loader: 'url-loader?limit=10240'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ],
    },
    postcss: [autoprefixer, precss],
    watch: true

};
//生产环境
exports.production = {
    entry: {
        index: path.resolve(APP_PATH, 'scripts/index.js'),
    },

    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js',
    },

    resolve: {
        root: APP_PATH,
        extensions: ['', '.js', '.jsx', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!sass!postcss'),
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|woff)$/,
                loader: 'url?limit=10240'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    plugins: [
        uglifyJs,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin('css/[name].css', {allChunks: true}),
    ],
};