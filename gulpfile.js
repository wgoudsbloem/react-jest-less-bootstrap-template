//var gulp = require('gulp');
var gulp = require('./gulp/dev/task')(
  ['clean', 'html', 'browserify', 'less']
);

var server = require('gulp-develop-server');

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

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./src/**/*.*', ['browserify', 'html', 'less']);
});

gulp.task('default', ['clean', 'html', 'browserify', 'less', 'watch', 'server:start']);
