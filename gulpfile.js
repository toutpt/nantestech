var concat = require('gulp-concat');
var less = require('gulp-less');
var gulp = require('gulp');
var path = require('path');

gulp.task('copy', function() {
  gulp.src(['bower_components/bootstrap/fonts/*'])
    .pipe(gulp.dest('../static/fonts'));
});
gulp.task('javascripts', function() {
  gulp.src([
        'static/js/vendor/modernizr-2.6.2.min.js',
        'static/js/vendor/jquery-1.10.2.min.js'
      ])
    .pipe(concat("nantestech.js"))
    .pipe(gulp.dest('static/admin/js'));
  gulp.src([
      'bower_components/gremlins/gremlins.min.js',
      'src/gremlins.js',
    ])
    .pipe(concat("gremlins.js"))
    .pipe(gulp.dest('static'));
});
gulp.task('less', function () {
  gulp.src('nantestech.less')
    .pipe(less({
      paths: [ path.join(__dirname) ]
    }))
    .pipe(gulp.dest('../static'));
});
gulp.task('default', ['copy', 'javascripts', 'less']);
gulp.task('watch', function () {
  gulp.watch(['*.js'], ['javascripts']);
  gulp.watch('*.less', ['less']);
});
