var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();
gulp.task('watch', function() {
    browserSync.init({
        notify: true,
        server: {
            baseDir: "./app"
        }
    })
    watch('./app/index.html', function() {
        browserSync.reload();
    }).on('error', function(errInfo) {
        console.log(errInfo.toString());
        this.emit('end');
    })
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

});
gulp.task('cssInject', ['css'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});