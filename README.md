# Welcome to the A-frame Gulp.js Tutorial

# Running the tutorial

```
npm install gulp-cli -g
npm install

gulp
```

Server runs on ```http://localhost:8080```

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

# The actual example code

Create a folder called ```src```. This will be where we put our magic ```code```

After that create a folder in that called ```js``` this will be where we import our ```aframe```

In ```js``` insert ```app.js``` with this code.

```
// src/js/app.js

var AFRAME = require('aframe');
```

Back in the root of the ```src``` folder, insert ```index.html``` with this code.

```
<!-- /src/index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>Hello, WebVR! - A-Frame</title>
    <meta name="description" content="Hello, WebVR! - A-Frame">
    <script src="/js/app.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```

Thats it for the code.

# Running the A-Frame app

To run the server, simple run

``` gulp ```

in the root of the project directory.

This will host your web app at ```http://localhost:8080```

# Thanks for checking out this tutorial!

Created by Mechasparrow
