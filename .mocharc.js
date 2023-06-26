"use strict";

module.exports = {
  reporter: 'mocha-junit-reporter',
  reporterOptions: [
    "mochaFile=results/test-results.xml",
    "testCaseSwitchClassnameAndName=1",
    "outputs=1"
  ],
  file: ["./specs/demoTest.spec.js"],
}