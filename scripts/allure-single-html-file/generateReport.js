const allure = require('allure-commandline');
const { execSync } = require('child_process');
const path = require('path');

const { basePath } = require('../../setup');

const generateAllureReport = (clean) => {
  const resultsPath = path.join(basePath, 'allure-results');
  const reportPath = path.join(basePath, 'allure-report');
  const scriptPath = path.join(__dirname, 'combine.py');

  const allureArgs = ['generate', resultsPath];

  if (clean) {
    allureArgs.push('--clean');
  }

  const generation = allure(allureArgs);

  console.log('Generating report...');

  generation.on('exit', function (exitCode) {
    if (exitCode === 0) {
      try {
        execSync(`python3 ${scriptPath} ${reportPath}`, {
          stdio: 'ignore',
        });
        console.log('One-file report succesfully generated');
      } catch (error) {
        console.log(error);
      }
      return;
    }

    console.log('An error occurred. Exit code:', exitCode);
  });
};

module.exports = {
  generateAllureReport,
};
