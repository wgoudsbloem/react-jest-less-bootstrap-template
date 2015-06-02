var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

module.exports = function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
};
