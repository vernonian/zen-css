const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const combineAndMinify = () => {
  return gulp.src([
    './css/reset.css',
    './css/variables/colors.css',
    './css/variables/units.css',
    './css/variables/elevations.css',
    './css/classes/colors.css',
    './css/classes/elevations.css',
    './css/classes/spaces.css',
    './css/classes/text.css',
    './css/classes/images.css',
    './css/classes/flex.css',
    './css/classes/grids.css',
    './css/classes/wrappers.css',
    './css/atoms/button-link.css',
    './css/atoms/bento.css',
  ])
    .pipe(concat('zen.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
}

exports.combineAndMinify = combineAndMinify;
exports.default = combineAndMinify;