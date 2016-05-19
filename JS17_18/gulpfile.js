var gulp = require('gulp');
var concat = require('gulp-concat');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
  scripts: 'js/src/*.js',
  style: 'css/src/*.css'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(concat('gulp.built.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
    .pipe(gulp.dest('js/dist'));
});
gulp.task('style', ['clean'], function() {

  return gulp.src(paths.style)
    .pipe(sourcemaps.init())
      .pipe(concat('gulp.built.css'))
      .pipe(minifycss({compatibility: 'ie8'}))
      .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/dist'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);

});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'style']);
