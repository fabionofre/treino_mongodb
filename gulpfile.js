var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	router = require('rotas/routerConfig.js'),
	db = require('./src/model/Db.js'),
	express = require('express'),
	http = require('http'),
	bodyParser = require('body-parser'),
	morgan = require('morgan');

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
		var server = http.createServer(app);
		// middlewares
		app.use(morgan('dev'));
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());

		// database
		db.createConnection();
		
		// fire up express
		server.listen(3000, function(){
			console.log('Servidor node express rodando');
		});

		// add routes
		// router.router(app);
		require('./routes')(app);
		
		// app.use(express.static('./'));
});

gulp.task('mongodb', function(){

	// modelCompany.createCompany({
	// 	name: 'Silva',
	// 	address:{
	// 		name: 'Address 1',
	// 		number: 765,
	// 		city: 'São Paulo'
	// 	},
	// 	date: new Date()

	// });

});