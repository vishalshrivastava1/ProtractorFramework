var HtmlReporter = require("C:/Users/tester/AppData/Roaming/npm/node_modules/protractor/node_modules/protractor-beautiful-reporter");

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//testcases/calculator1.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
  }



};
