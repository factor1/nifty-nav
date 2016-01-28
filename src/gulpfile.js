// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

// Clean Dist Folder
gulp.task('clean', function() {
	return gulp.src('../dist/***/*', {read: false})
	.pipe(clean({force: true}));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass and minify it
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(rename({
	        suffix: '.min'
        }))
        .pipe(minifyCss({
		    compatibility: 'ie8',
		    aggressiveMerging: false,
		    processImport: true
	    }))
	    .pipe(gulp.dest('../dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(rename({
	        suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('../dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
    //gulp.watch('css/src/*.css', ['minify-css']);
});

// Copy ReadMe
gulp.task('readme', function(){
	return gulp.src('../README.md')
		.pipe(gulp.dest('./'));
});

// Default Task
gulp.task('default', ['clean','lint', 'sass', 'scripts', 'readme', 'watch']);
