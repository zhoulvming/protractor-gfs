// solves `SyntaxError: Unexpected token import`
require("babel-register")({
  presets: [ 'es2015' ]
});

exports.config = {
  specs: ['e2e/specs/*spec.js'],
  baseUrl: '',

  /**
   * to run on sauceLabs, create two env vars with your username and key
   *
   * eg.
   * `export SAUCE_USERNAME=<your username>
   */
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  onPrepare: function(){

  },

  multiCapabilities: [
    // {
    //   'browserName': 'internet explorer',
    //   'platform': 'Windows 8.1',
    //   'version': '11',
    //   'name': 'Win8.1/IE11...'
    // },
    {
        'browserName': 'chrome'
    }
  ],

  jasmineNodeOpts: {
      isVerbose: true,
      includeStackTrace: true,
      showColors: true,
      defaultTimeoutInterval: 30000
  }
};




// const { SpecReporter } = require('jasmine-spec-reporter');
// exports.config = {
//   allScriptsTimeout: 11000,
//   specs: [
//     './e2e/**/sample.ts'
//   ],
//   capabilities: {
//     'browserName': 'chrome'
//   },
//   // directConnect: true,
//   baseUrl: 'http://localhost:4200/',
//   framework: 'jasmine',
//   jasmineNodeOpts: {
//     showColors: true,
//     defaultTimeoutInterval: 30000,
//     print: function() {}
//   },
//   onPrepare() {
//     require('ts-node').register({
//       project: 'e2e/tsconfig.e2e.json'
//     });
//     jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
//   }
// };
