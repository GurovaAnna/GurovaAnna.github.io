'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var paths = {
  style: 'sass/**/*.scss'
};

// gulp.task('clean', function() {
//   return del(['build']);
// });
gulp.task('sass', function () {
  return gulp.src(paths.style)
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.style, ['sass']);
});

// The default task (called when you run `gulp` from cli)
