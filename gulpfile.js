const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

gulp.task('css', () => {
  return gulp
    .src('css/tailwind.css')
    .pipe(postcss([tailwindcss('./tailwind.config.js')]))
    .pipe(gulp.dest('dist/css'));
});

  
