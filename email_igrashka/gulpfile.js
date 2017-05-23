var gulp = require('gulp'),
    sass = require('gulp-sass'),
    inky = require('inky'),
    inlineCss = require('gulp-inline-css');
  


//STYLES
gulp.task('styles', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//CONVERTE INKY
gulp.task('inky', ['styles'], function() {
  return gulp.src('./temp/**/*.html')
    .pipe(inky())
    .pipe(inlineCss())
    .pipe(gulp.dest('./dist'));
});

//WATCH
gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss', './temp/**/*.html'],['inky']);
});
gulp.task('default', ['watch']);