# Welcome to the A-frame Gulp.js Tutorial


# Getting Started

First we are going to install gulp and the helper libraries for it.

Create a Node.Js Project

``` npm init ```

This will create a ``` package.json``` file

Install Gulp.js  

```
npm install gulp-cli -g
npm install gulp -D
```

Next we install helper libraries for Gulp

``` npm install --save-dev jshint gulp-jshint gulp-concat gulp-uglify gulp-rename gulp-connect ```

We are also going to install browserify to build it to web

``` npm install --save-dev gulp-browserify ```

Actually install Aframe.

We should finally actually install aframe

``` npm install --save aframe ```

# Creating our build setup

Create a file in the root of the project called ```gulpfile.js```

Put this in it.

```
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

```

Alright awesome. Now to the actual code...
