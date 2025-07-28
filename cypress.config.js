const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {mochaFile: 'cypress/reports/junit/todo.cy.js-results.xml',
    toConsole: true},
  e2e: {
    setupNodeEvents(on, config) {
      // Optional event listeners
    }
  }
});
