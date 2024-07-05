const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const combineAndMinify = () => {
  return gulp.src([
    './css/variables/colors.css',
    './css/variables/units.css',
  ])
    .pipe(concat('zen.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
}

exports.combineAndMinify = combineAndMinify;
exports.default = combineAndMinify;