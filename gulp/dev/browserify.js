var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

module.exports = function(){

  var bundler = browserify();

  b = browserify(
    {
      entries: ['./src/jsx/Main.js'], // Only need initial file, browserify finds the deps
      transform: [reactify],
      global: true, // We want to convert JSX to normal javascript
      debug: true, // Gives us sourcemapping
      cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  }

);
  // b.transform(reactify); // use the reactify transform
  // b.add('./src/jsx/index.jsx');
   return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./public/lib/jsx/'));
};
