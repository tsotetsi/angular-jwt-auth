module.exports = function(config) {
    config.set({

        frameworks: ['mocha', 'sinon-chai'],
        //plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-sinon-chai'],

        preprocessors: {
            'dist/**/*.js': ['coverage']
        },

        reporters: ['progress', 'coverage'],

        port: 9018,
        runnerPort: 9100,
        urlRoot: '/',

        autoWatch: false,
        browsers: [
            'PhantomJS'
        ],

        logLevel: config.LOG_INFO,

        coverageReporter: {
            // specify a common output directory
            dir: 'reports/coverage',
            reporters: [
                // reporters not supporting the `file` property
                //{type: 'html', subdir: 'report-html'},
                {type: 'lcov', subdir: 'report-lcov'},
                {type: 'clover', subdir: 'app'}
            ]
        }
    });
};