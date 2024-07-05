const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const combineAndMinify = () => {
  return gulp.src([
    './css/variables/colors.css',
    './css/variables/units.css',
    './css/variables/elevation.css',
    '/css/classes/colors.css',
    '/css/classes/elevation.css',
    '/css/classes/spaces.css',
    '/css/classes/text.css',
    '/css/classes/images.css',
    '/css/classes/flex.css',
    '/css/classes/grids.css',
    '/css/classes/wrappers.css',
    '/css/atoms/ubtton-link.css',
    '/css/atoms/bento.css',
  ])
    .pipe(concat('zen.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
}

exports.combineAndMinify = combineAndMinify;
exports.default = combineAndMinify;