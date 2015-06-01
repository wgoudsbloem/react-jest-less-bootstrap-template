var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var server = require('gulp-develop-server');
var livereload = require('gulp-livereload');
var reactify = require('reactify');


gulp.task('html-dev', function() {
  gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});

var react = require('gulp-react');
gulp.task('react', function () {
    return gulp.src('./src/jsx/**/*')
        .pipe(react())
        .pipe(gulp.dest('public/lib/jsx/'));
});

var rimraf = require('gulp-rimraf');
gulp.task('clean', function() {
  return gulp.src('./public/**/*.*', { read: false })
    .pipe(rimraf());
});

// run server
gulp.task('server:start', function() {
  server.listen({
    path: './app.js'
  });
});

// restart server if app.js changed
gulp.task('server:restart', function() {
  gulp.watch(['./app.js'], server.restart);
});

gulp.task('browserify', function() {
  return browserify({
    entries: './src/js/index.js',
    transform: [reactify],
    debug: true
  })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./public/lib/'));
});

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  livereload.listen();
  server.listen({
    path: './app.js'
  });
  gulp.watch('./src/**/*.*', ['browserify', 'html-dev', 'less', 'react', 'server:restart']);
});

gulp.task('default', ['clean', 'browserify', 'html-dev', 'less', 'react']);
