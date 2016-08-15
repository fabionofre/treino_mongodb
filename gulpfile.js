var gulp = require('gulp'),
	gls = require('gulp-live-server'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	modelCompany = require('./src/model/Company.js');

gulp.task('default', ['concatComponents', 'convertPage', 'watch', 'serve']);


gulp.task('concatComponents', function(){
	return gulp.src('src/jsx/components/*.jsx')
	.pipe(concat('components.min.js'))
	.pipe(gulp.dest('js/'))
	.pipe(babel({
		presets: ['react']
	}))
	.pipe(gulp.dest('js/'))
	.pipe(uglify())
	.pipe(gulp.dest('js/'))
});

gulp.task('convertPage', function(){
	return gulp.src('src/jsx/*.jsx')
	.pipe(babel({
		presets: ['react']
	}))
	.pipe(gulp.dest('js/page'));
});

gulp.task('watch', function(){
	gulp.watch('src/jsx/**/*.jsx', ['concatComponents', 'convertPage']);
});

gulp.task('serve', function(){
	var server = gls.static('./', 8000);
	server.start();
	// gulp.watch('./js/**/*.js', function(file){
	// 	gls.notify.apply(server, [file]);
	// });

	// gulp.watch('./index.html', function(file){
	// 	gls.notify.apply(server, [file]);
	// });

	// gulp.watch('./src/html/*.html', function(file){
	// 	gls.notify.apply(server, [file]);
	// });

});

gulp.task('mongodb', function(){

	modelCompany.createCompany({
		name: 'Silva'
	});

});