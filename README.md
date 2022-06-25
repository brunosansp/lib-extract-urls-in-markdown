# lib-extract-urls-in-markdown
Extração de links(URLs) que estejam em um arquivo de extensão Markdown(.md).

# run in terminal
node cli.js ./files/file1.md
# Ex package.json:
{
  "name": "lib-markdown",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest ./test",
    "cli": "node cli.js ./files/file1.md"
  },
  "keywords": [],
  "author": "Bruno Santos",
  "license": "ISC",
  "dependencies": {
    "chalk": "^4.1.2",
    "node-fetch": "^2.6.1"
  },
  "devDependencies": {
    "jest": "^28.1.1"
  }
}

# run in terminal with script in package.json
npm run cli