const { CucumberJSAllureFormatter } = require("allure-cucumberjs");
const { AllureRuntime } = require("allure-cucumberjs");

class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({ resultsDir: "./allure-results" }),
      {}
    );
  }
}

module.exports = Reporter;