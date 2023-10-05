const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function cssTasks() {
  return (
    src('./scss/*.scss')
      .pipe(scss())
      // .pipe(
      //   purgecss({
      //     content: ['./index.html'],
      //   })
      // )
      .pipe(autoprefixer('last 2 versions'))
      .pipe(cssMinify())
      .pipe(dest('./dist/css'))
  );
}

function watchTask() {
  watch(['./scss/**/*.scss', './index.html'], series(cssTasks));
}

exports.default = series(cssTasks, watchTask);
