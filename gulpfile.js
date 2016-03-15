var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

// Browserify for testing purposes
gulp.task('browserify-test', function() {
  browserify(__dirname + '/test/test-bundler.js')
    .bundle()
    .on('error', function(e) {
      gutil.log(e);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('default', ['browserify-test']);
