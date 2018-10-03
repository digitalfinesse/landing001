const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

/* - - - - - - - Server - - - - - - - */

gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});


gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/template/index.pug')
        .pipe(pug({

        }))
});