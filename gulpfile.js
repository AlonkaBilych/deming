'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './app'
    },
  })
})
gulp.task('watch', ['browserSync', 'sass'], function (){
gulp.watch('./sass/**/*.scss', ['sass']);
gulp.watch('./app/*.html', browserSync.reload);
gulp.watch('./app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);