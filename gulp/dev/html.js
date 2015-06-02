var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function() {
  gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
};
