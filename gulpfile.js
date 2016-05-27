var gulp = require('gulp');
var nano = require('gulp-cssnano');
var merge = require('merge-stream');
var del = require("del");

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config');

// 引入配置文件
var config = require('./src/common/config');
// 配置变量替换
var preprocess = require('gulp-preprocess');


gulp.task("copy", function () {
    return merge(
        gulp.src([
                'node_modules/slick-carousel/slick/slick.css',
                'node_modules/slick-carousel/slick/slick-theme.css'
            ])
            .pipe(nano())
            .pipe(gulp.dest('public/css/')),
        gulp.src([
                'node_modules/slick-carousel/slick/ajax-loader.gif'
            ])
            .pipe(gulp.dest('public/css/')),

        gulp.src(['node_modules/slick-carousel/slick/fonts/*'])
            .pipe(gulp.dest('public/css/fonts')),

        gulp.src(['src/images/!**/!*'])
            .pipe(gulp.dest('public/images')),
        gulp.src('src/common/config.static.scss')
            .pipe(preprocess({
                context: config
            }))
            .pipe(gulp.dest('src/containers'))
    )
});

// 开发环境
gulp.task("webpack-dev", function () {
    return webpack(webpackConfig.development)
        .pipe(gulp.dest('./public'));
});

// server
gulp.task("webpack-server", function () {
    return webpack(webpackConfig.server)
        .pipe(gulp.dest('./public'));
});

// 生产环境
gulp.task("webpack", function () {
    return webpack(webpackConfig.production)
        .pipe(gulp.dest('./public'));
});

// 清理文件
gulp.task("clean", function () {
    return del([
        'public/**'
    ]);
});

// 监听变动
gulp.task("watch", function () {
    gulp.watch([
        "src/images/**/*.*"
    ], [
        "copy"
    ]);

});

// 开发时执行
gulp.task("dev", ["copy", "webpack-dev"]);

// 默认任务
gulp.task("default", ["copy", "webpack"]);