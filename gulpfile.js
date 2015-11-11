var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function () {
  return sass('src/style.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist'));
});
