//var gulp = require('gulp');
var gulp = require('./gulp/dev/task')(
  ['clean', 'html', 'browserify', 'less']
);

var server = require('gulp-develop-server');

// restart server if app.js changed
gulp.task('server:restart', function() {
  gulp.watch(['./app.js'], server.restart);
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./src/**/*.*', ['browserify', 'html', 'less']);
});

gulp.task('default', ['clean', 'html', 'browserify', 'less', 'watch'], function(){
  // start server when all task are completed
  server.listen({
    path: './app.js'
  });
});
