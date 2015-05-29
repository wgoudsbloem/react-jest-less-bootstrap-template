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

gulp.task('default', function() {
  // place code for your default task here
  // gulp.src('src/**/*.js')
  // .pipe(browserify())
  // .pipe(gulp.dest('build'));
});

gulp.task('browserify', function() {
  return browserify('./src/js/index.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('index.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./public/lib/'));
});

gulp.task('live-reload', function() {

});

// Watch Files For Changes
gulp.task('watch', function() {
  //livereload.middleware();
  livereload.listen();
  server.listen({
    path: './app.js'
  });
  gulp.watch('./src/**/*.*', ['browserify', 'html-dev', 'server:restart', 'live-reload']);
});
