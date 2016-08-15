var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	modelCompany = require('./src/model/Company.js'),
	router = require('rotas/routerConfig.js'),
	express = require('express');

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
		var app = express();
		app.listen(9000);
		app.use(express.static('./'));
		router.router(app);		
});

gulp.task('mongodb', function(){

	modelCompany.createCompany({
		name: 'Silva',
		address:{
			name: 'Address 1',
			number: 765,
			city: 'São Paulo'
		},
		date: new Date()

	});

});