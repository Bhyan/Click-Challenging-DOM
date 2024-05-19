const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://the-internet.herokuapp.com",
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    retries: 1,
  },
});
