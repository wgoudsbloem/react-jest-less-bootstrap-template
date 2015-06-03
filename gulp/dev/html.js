var gulp = require('gulp');

module.exports = function() {
  gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('public/'));
};
