/*==============*\
    Variables
\*==============*/

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	coffee = require('gulp-coffee'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus');


// Javascript

var jsSources = [
	'components/scripts/jquery.js',
	'components/scripts/script.js'
];


// Jade 

var jadeSources = [
	'components/jade/html/*.jade'
];

// Stylus

var stylusSources = [
	'components/stylus/style.styl'
];

// CoffeeScript

var coffeeSources = [
	'components/coffee/*.coffee'
];




/*================*\
    * Scripts *
\*================*/

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('js'));

});



/*===============*\
	* jade *
\*===============*/

gulp.task('templates', function(){
	gulp.src(jadeSources)
		.pipe(jade())
		.pipe(gulp.dest('./'));
});



/*===============*\
	* stylus *
\*===============*/

gulp.task('compress', function(){
	gulp.src(stylusSources)
		.pipe(stylus({
			compress: true
		}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'));
});




/*=====================*\
	* CoffeeScript *
\*=====================*/

gulp.task('coffee', function(){
	gulp.src(coffeeSources)
	.pipe(coffee({bare:true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'));
});



/*=====================*\
    * General task *
\*=====================*/

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch(jadeSources, ['templates']);
	gulp.watch(stylusSources, ['compress']);
	gulp.watch(coffeeSources, ['coffee']);

});

gulp.task('default', ['js', 'templates', 'compress', 'coffee', 'watch']);


