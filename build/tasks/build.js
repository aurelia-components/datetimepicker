var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var pug = require('gulp-pug');
var concatCss = require('gulp-concat-css');

gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es2015'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('concat-css', function () {
  return gulp.src(['src/style.css', 'jspm_packages/npm/eonasdan-bootstrap-datetimepicker@4.15.35/build/css/bootstrap-datetimepicker.css'])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('src/'));
});

gulp.task('build-css', function () {
  return gulp.src(paths.cssBundle)
    .pipe(gulp.dest(paths.output + 'es2015'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-es2015', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.es2015())))
    .pipe(gulp.dest(paths.output + 'es2015'));
});

gulp.task('build-commonjs', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.amd())))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['compile-pug', 'concat-css'],
    ['build-html', 'build-css', 'build-es2015', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});

gulp.task('compile-pug', function () {
  return gulp.src(paths.pug)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('src/.'));
});
