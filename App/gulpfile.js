const babel = require("gulp-babel");
const concat = require("gulp-concat");
const del = require("del");
const express = require("express");
const gulp = require("gulp");
const less = require("gulp-less");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");
const runSequence = require("run-sequence");
const uglify = require("gulp-uglify");
const ui5Lib = require("gulp-ui5-lib");
const watch = require("gulp-watch");
const ui5preload = require('gulp-ui5-preload');
const lazypipe = require('lazypipe');
const gulpif = require('gulp-if');
const prettydata = require('gulp-pretty-data');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');

const SRC_ROOT = "./src";
const ASSETS_ROOT = "./build";
const MODULES = [
	{path: "com/uniorg/cf/banking/example", namespace: "com/uniorg/cf/banking/example"},
	{path: "com/uniorg/cf/banking/login", namespace: "com/uniorg/cf/banking/login"}];

MODULES.forEach(module => {
	// See generateBuildModuleTask(modul) bellow
	generateBuildModuleTask(module);
	generateBuildDevModuleTask(module);
});
var onError = function (err) {
	gutil.log(err.toString());
	this.emit('end');
};
gulp.task("default", [ "build" ]);

gulp.task("clean", cb => {
	del(`${ASSETS_ROOT}/example`).then(() => {
		cb();
	}, reason => {
		cb(reason);
	});
});

gulp.task("build", [ "clean" ], cb => {
	// Let's build modules one by one,
	const params = MODULES.map(module => `build:${module.path}`);

	// Don't forget our callback.
	params.push(cb);

	// Execute the workflow.
	runSequence.apply(this, params);
});

gulp.task("dev", [ "clean" ], cb => {
	// Let's build modules one by one,
	const params = MODULES.map(module => `build-dev:${module.path}`);

	// Don't forget our callback.
	params.push(cb);

	// Execute the workflow.
	runSequence.apply(this, params);
});





function generateBuildModuleTask(module)
{
	gulp.task(`build:${module.path}`, cb => {
		runSequence(
			[
				`build-less:${module.path}`,
				`build-js:${module.path}`,
			],
			`copyFile:${module.path}`,
			`ui5preload:${module.path}`,
			`build-library:${module.path}`,
			cb
		);
	});

	gulp.task(`build-js:${module.path}`, () => {
		return gulp.src(`${SRC_ROOT}/${module.path}/**/*.js`)
			.pipe(babel())
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
	});

	gulp.task(`build-less:${module.path}`, () => {
		return gulp.src(`${SRC_ROOT}/${module.path}/themes/base/library.less`)
			.pipe(less())
			.pipe(minifyCss())
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}/themes/base`));
	});

	gulp.task(`build-library:${module.path}`, () => {
		return gulp.src(`${ASSETS_ROOT}/${module.path}/**/*.+(js)`)
			.pipe(uglify())
			.pipe(ui5Lib(`${module.path}`))
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
	});

	gulp.task(`ui5preload:${module.path}`, function(){
		return gulp.src([
							`${ASSETS_ROOT}/${module.path}/**/**/**.+(js|xml)`,
						])

			.pipe(plumber({
							  errorHandler: onError
						  }))
			.pipe(ui5preload({base:`${SRC_ROOT}/${module.path}`,namespace:'com.uniorg.cf.banking.example'}))
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
	});


	gulp.task(`copyFile:${module.path}`, function(){
		return gulp.src([
							`${SRC_ROOT}/${module.path}/**/**/**.+(json|xml|html|properties|css)`,
						])

			.pipe(plumber({
							  errorHandler: onError
						  }))
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
	})
}

function generateBuildDevModuleTask(module)
{
	gulp.task(`build-dev:${module.path}`, cb => {
		runSequence(
			[
				`build-dev-js:${module.path}`,
				`ui5preload-dev:${module.path}`,
				`copyFile-dev:${module.path}`,
			],
			cb
		);
	});

	gulp.task(`build-dev-js:${module.path}`, () => {
		const sourceFiles = `${SRC_ROOT}/${module.path}/**/*.js`;
		return gulp.src(sourceFiles)
			.pipe(watch(sourceFiles))
			.pipe(babel({ sourceMaps: "inline" }))
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
	});


	gulp.task(`ui5preload-dev:${module.path}`, function(){
		const sourceFiles = `${ASSETS_ROOT}/${module.path}/**/**.+(xml)`;
		return gulp.src([
							sourceFiles,
						])
			.pipe(watch(sourceFiles))
			.pipe(ui5preload({base:`${SRC_ROOT}/${module.path}`,namespace:'com.uniorg.cf.banking.example'}))
			.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
	});


	gulp.task(`copyFile-dev:${module.path}`, function(){
		const sourceFiles = `${SRC_ROOT}/${module.path}/**/**.+(json|xml|html|properties|css)`;

		return watch(sourceFiles, function () {
			gulp.src(sourceFiles)
				.pipe(gulp.dest(`${ASSETS_ROOT}/${module.path}`));
		});
	});
}
