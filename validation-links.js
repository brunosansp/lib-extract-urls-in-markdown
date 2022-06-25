const fetch = require('node-fetch');

function manageError(error) {
  throw new Error(error.message);
}

async function checkStatusCode(arrayURLs) {
  try {
    const arrayStatusCode = await Promise
      .all(arrayURLs
        .map(async url => {
          const response = await fetch(url)
          return response.status;
        }));
    return arrayStatusCode;
  } catch (error) {
    manageError(error);
  }
}

function getValuesURLs(arrayLinks) {
  return arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join());
}

async function validationURLs(arrayLinks) {
  const links = getValuesURLs(arrayLinks);
  const statusCodeLinks = await checkStatusCode(links);
  const results = arrayLinks.map((object, index) => ({
    ...object,
    status: statusCodeLinks[index]
  }));
  return results;
}
module.exports = validationURLs;