var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Browserify
var browserify = require('gulp-browserify');

//Server lib
var connect = require('gulp-connect');

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function () {

    // Multi entry point
    gulp.src('src/js/*.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(gulp.dest('dist/js'))

})


gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: false
    });
});

// Default Task
gulp.task('default', ['html', 'scripts', 'connect', 'watch']);
