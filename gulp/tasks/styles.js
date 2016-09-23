var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    simpleVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    postcssimport = require('postcss-import'),
    autoprefixer = require('autoprefixer'),
    mixins = require('postcss-mixins');
gulp.task('css', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postcssimport, mixins, autoprefixer, simpleVars, nested]))
        .on('error', function(errInfo) {
            console.log(errInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
})