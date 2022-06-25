const chalk = require('chalk');
const getFile = require('./index.js');
const validationURLs = require('./validation-links.js');

const args = process.argv;

async function processFile(filePath) {
  const result = await getFile(filePath[2]);
  if (filePath[3] === 'validar') {
    console.log(chalk.yellow('Links validados:'), await validationURLs(result));
  } else {
    console.log(chalk.yellow('Links'), result);
  }
}
processFile(args);