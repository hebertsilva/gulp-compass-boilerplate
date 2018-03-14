var gulp = require('gulp');
var compass = require('gulp-compass');
var browserSync = require('browser-sync');

gulp.task('compass-task', () => {
	gulp.src(['compass/source/*.scss', 'compass/source/*/*.scss'])
	.pipe(compass({
		config_file: './compass/config.rb',
		css: 'public/css',
		sass: 'compass/source',
		style: 'compact',
		comments: false
	}))
	.pipe(gulp.dest('public/css'))
	.pipe(browserSync.stream());
});

gulp.task('browser-reload', function () {
	browserSync.reload();
});

gulp.task('watch', () => {
	gulp.watch(['compass/source/*.scss', 'compass/source/*/*.scss'], ['compass-task']);
	gulp.watch('public/js/**/*.js', ['browser-reload']);
	gulp.watch('*.html', ['browser-reload']);
	gulp.watch('*.php', ['browser-reload']);
	gulp.watch('*/*.php', ['browser-reload']);
});

gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: "http://127.0.0.1:8000/"
	});
});

gulp.task('default', ['compass-task', 'watch', 'browser-sync']);