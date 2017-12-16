'use strict';

const gulp = require('gulp');
const del = require('del');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
 
gulp.task('clean', function () {
    return del('dist/**', {force: true});
});

 
gulp.task('default', ['clean'], function() {
  gulp.src('src/js/*.js')
    .pipe(minify({
        ext: {
            min: '.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('dist'));

  gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(gulp.dest('dist'))
});
