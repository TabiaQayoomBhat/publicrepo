const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "viewportWidth": 1600,
  "video": false,
        "screenshotOnRunFailure": false,
    "viewportHeight": 1200,
  e2e: {
    setupNodeEvents(on, config) {
      
      specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
      // implement node event listeners here
      
    },
  },
});
