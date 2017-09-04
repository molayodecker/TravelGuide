
//////////////////////////////////////
///////// REQUIRE  //////////////////
////////////////////////////////////
var gulp = require('gulp'),
uglify = require('gulp-uglify'),
compass = require('gulp-compass'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
autoprefixer = require('gulp-autoprefixer');
plumber = require('gulp-plumber');
rename = require('gulp-rename');

//////////////////////////////////////
///////// SCRIPT-TASK ///////////////
////////////////////////////////////  

gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', 'app/js/**/*.min.js'])
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js/'));
});

 //////////////////////////////////////
//////////////COMPASS / SCSS TASK ////
/////////////////////////////////////  

gulp.task('compass', function(){
	gulp.src('app/sass/style.sass')
	.pipe(plumber())
	.pipe(compass({
		config_file: './config.rb',
		css: 'app/css',
		sass: 'app/sass',
		require: ['susy']
	}))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('app/css/'))
	.pipe(reload({stream:true}));
});

 //////////////////////////////////////
//////////////HTML TASK /////
///////////////////////////////////// 
gulp.task('html', function(){
	gulp.src('app/**/*.html');
});

 //////////////////////////////////////
//////////////Browser-Sync task ////
/////////////////////////////////////  
gulp.task('browser-sync',function(){
	browserSync({
		server:{
			baseDir: "./app/"
		}
	});
});


//////////////////////////////////////
///////// WATCH-TASK ////////////////
//////////////////////////////////// 

gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js',['scripts']);
	gulp.watch('app/scss/**/*.scss',['compass']);
	gulp.watch('app/**/*.html',['html']);
});

//////////////////////////////////////
///////// DEFAULT-TASK //////////////
////////////////////////////////////  

gulp.task('default', ['scripts','compass','html','browser-sync','watch']);