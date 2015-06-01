var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var server = require('gulp-develop-server');
var bower = require('gulp-bower');
var livereload = require('gulp-livereload');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/lib/'));
});

gulp.task('html-dev', function() {
  gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
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

gulp.task('default', ['browserify', 'html-dev', 'less', 'aurelia']);

gulp.task('aurelia', function(){
  gulp.src('./jspm_packages/**/*.*')
    .pipe(gulp.dest('public/lib/jspm_packages/'));
    gulp.src('./config.js')
      .pipe(gulp.dest('public/lib/'));
})

gulp.task('browserify', function() {
  return browserify('./src/js/index.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('index.js'))
    // Start piping stream to tasks!
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
  gulp.watch('./src/**/*.*', ['browserify', 'html-dev', 'less', 'server:restart']);
});
