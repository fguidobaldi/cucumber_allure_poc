const args = require('minimist')(process.argv.slice(2));
const { generateAllureReport } = require('./generateReport');

generateAllureReport(args.clean);
