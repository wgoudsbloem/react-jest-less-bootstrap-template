var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

module.exports = function() {
  return gulp.src('./public/**/*.*', { read: false })
    .pipe(rimraf());
};
