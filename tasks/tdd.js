var gulp = require('gulp'),
  karma = require('gulp-karma');

module.exports = function(config){

  gulp.task('tdd', tddTask);

  function tddTask () {

    return gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/sass-bootstrap/dist/js/bootstrap.js',
      'bower_components/angular/angular.js',,
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'src/**/*.js'
    ])
    .pipe(karma(config.karma))
    .on('error', function(err) {
      throw err;
    });
  }

}

