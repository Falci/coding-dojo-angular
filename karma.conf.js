module.exports = function(config) {
  config.set({
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai', 'chai-as-promised'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/sass-bootstrap/dist/js/bootstrap.js',
      'bower_components/angular/angular.js',,
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'src/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'src/index.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: 'INFO',


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    plugins: [
      'karma-mocha',
      'karma-junit-reporter',
      'karma-chai',
      'karma-sinon-chai',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-chai-plugins'
    ]
  });
};