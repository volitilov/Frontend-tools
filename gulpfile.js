'use strict';

//

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const gulp = require('gulp');

const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

gulp.task('style', function(){
    return gulp.src('src/style/**/**.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('dest/style'));
});


gulp.task('default', function() {
    return gulp.src('source/**/*.*')
        .pipe(gulp.dest('dest'));
});