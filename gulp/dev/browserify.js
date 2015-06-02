var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

module.exports = function(){
  b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/jsx/index.jsx');
  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./public/lib/jsx/'));
};
