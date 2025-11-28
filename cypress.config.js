const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com",
    specPattern: [
      "cypress/e2e/**/*.cy.js"
    ],
    viewportWidth: 1400,
    viewportHeight: 900,
    video: true,
    chromeWebSecurity: false,
    retries: 1,
    setupNodeEvents(on, config) {
      // événements Node
    },
  },
});
