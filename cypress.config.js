const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practicetestautomation.com/practice-test-exceptions/',
    loginTestBaseUrl:"https://practicetestautomation.com/practice-test-login/",
  },
})