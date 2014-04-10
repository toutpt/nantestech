var concat = require('gulp-concat');
var less = require('gulp-less');
var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');

gulp.task('copy', function() {
  gulp.src(['bower_components/bootstrap/fonts/*'])
    .pipe(gulp.dest('../static/fonts'));
});
gulp.task('javascripts', function() {
  gulp.src([
        'bower_components/jquery/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',

        'bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js',
        'bower_components/eventEmitter/EventEmitter.js',
        'bower_components/eventie/eventie.js',
        'bower_components/doc-ready/doc-ready.js',
        'bower_components/get-style-property/get-style-property.js',
        'bower_components/get-size/get-size.js',
        'bower_components/jquery-bridget/jquery.bridget.js',
        'bower_components/jquery-once/jquery.once.js',
        'bower_components/matches-selector/matches-selector.js',
        'bower_components/outlayer/item.js',
        'bower_components/outlayer/outlayer.js',
        'bower_components/imagesloaded/imagesloaded.js',
        'bower_components/masonry/masonry.js',
        'nantestech.js'

      ])
    .pipe(uglify())
    .pipe(concat("nantestech.js"))
    .pipe(gulp.dest('../static'));
});
gulp.task('less', function () {
  gulp.src('nantestech.less')
    .pipe(less({
      paths: [ path.join(__dirname) ],
      compress: true
    }))
    .pipe(gulp.dest('../static'));
});
gulp.task('default', ['copy', 'javascripts', 'less']);
gulp.task('watch', function () {
  gulp.watch(['*.js'], ['javascripts']);
  gulp.watch('*.less', ['less']);
});
