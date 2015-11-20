var gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    sass    = require('gulp-ruby-sass');

var paths = {
    coffee:  '',
    scss:    'src/*.scss',
    scripts: ''
};

gulp.task('scss', function () {
    return sass('src/style.scss')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['scss', 'watch']);
