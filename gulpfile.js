const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const webpack = require('gulp-webpack');
const del = require('del');

sass.compiler = require('node-sass');

const isDev = process.argv.includes('--dev');
const isProd = !isDev; 

const webConfig = {
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		],
	},
	mode: isDev ? "development" : "production",
	devtool: isDev ? "source-map" : "none"
};

function clean() {
	return del('./build/**/*');
}

function images() {
	return gulp.src('./src/img/**/*')
		.pipe(gulp.dest('./build/img'));
}

function html() {
	return gulp.src('./src/**/*.html')
		.pipe(gulp.dest('./build'))
		.pipe(gulpIf(isDev, browserSync.stream()));
}

function styles() {
	return gulp.src('./src/css/main.scss')
		.pipe(gulpIf(isDev, sourcemaps.init()))
			.pipe(sass().on('error', sass.logError))
			.pipe(gulpIf(isProd, cleanCSS))
			.pipe(gulpIf(isProd, autoprefixer()))
			.pipe(gulpIf(isProd, gcmq()))
		.pipe(gulpIf(isDev, sourcemaps.write()))
		.pipe(gulp.dest('./build/css'))
		.pipe(gulpIf(isDev, browserSync.stream()))
}

function js() {
	return gulp.src('./src/js/index.js')
		.pipe(webpack(webConfig))
		.pipe(gulp.dest('./build/js'))
		.pipe(gulpIf(isDev, browserSync.stream()));
}

function watch() {
	if (isDev) {
		browserSync.init({
			server: {
				baseDir: './build/'
			}
		});
	}

	gulp.watch('./src/css/**/*.scss', styles);
	gulp.watch('./src/**/*.html', html);
	gulp.watch('./src/js/**/*.js', js);
}

const build = gulp.series(clean, 
	gulp.parallel(images, html, styles, js));

const dev = gulp.series(build, watch);

gulp.task('clean', clean);
gulp.task('build', build);
gulp.task('dev', dev);