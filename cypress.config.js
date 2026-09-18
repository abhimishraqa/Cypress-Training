const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        logTitle(title) {
          console.log("Current page title =", title);
          return null;
        },
      });
    },
  },
});
