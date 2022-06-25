const chalk = require('chalk');
const fs = require('fs');

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayLinks = [];
  let temp;
  while ((temp = regex.exec(text)) !== null) {
    arrayLinks.push({ [temp[1]]: temp[2] });
  }
  return !arrayLinks.length ? 'Não foram encontrados links no arquivo' : arrayLinks;
}

function manageError(error) {
  throw new Error(chalk.red(error.code, 'Não foi encontrado arquivo no caminho especificado'));
}

async function getFile(filePath) {
  const encoding = 'utf-8';
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    return extractLinks(text);
  } catch (error) {
    manageError(error);
  }
}
module.exports = getFile;