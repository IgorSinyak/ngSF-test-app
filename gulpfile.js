'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');
var exec = require('child_process').exec;

gulp.task('deploy', function(cb) {
	return gulp.src('./build/**', { base: "." })
		.pipe(zip('package.zip'))
		.pipe(forceDeploy({
			username: 'test-gqjaxldfmedu@example.com',
			password: 'Ph%kt*-$|9',
			loginUrl: 'https://test.salesforce.com',
			token: '00D190000009Hnq!'
		}));
});

gulp.task('build', function (cb) {
	return exec('ng build', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('zip', function(cb) {
	return gulp.src('./dist/**', { base: "." })
		.pipe(zip('ngApp.resource'))
		.pipe(gulp.dest('./build/staticresources'));
});

gulp.task('deploySF', gulp.series('build', 'zip', 'deploy'));