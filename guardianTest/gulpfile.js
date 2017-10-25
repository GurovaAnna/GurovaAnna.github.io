'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  csso = require('gulp-csso'),
  sass = require('gulp-sass');
var paths = {
 	js:  './src/js/**/*.js',
 	sass:'./src/sass/**/*.scss'
};
//Styles
gulp.task('sass', function () {
  return gulp.src(paths.sass) 
  	.pipe(sass().on('error', sass.logError))
    .pipe(csso()) 
    .pipe(concat('main.min.css')) 
    .pipe(gulp.dest('./dist/css/')); 
});
// JavaScripts
gulp.task('js', function () {
  return gulp.src(paths.js) 
    .pipe(uglify()) 
    .pipe(concat('main.min.js')) 
    .pipe(gulp.dest('./dist/js/')); 
});

gulp.task('watch', function () {
  gulp.watch('./src/js/**/*.js', ['js']); 
  gulp.watch('./src/sass/**/*.scss', ['sass']); 
});

gulp.task('default', ['watch', 'sass', 'js']);