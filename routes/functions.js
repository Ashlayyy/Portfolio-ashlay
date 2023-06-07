/* eslint-disable no-unused-vars */
const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return data.toString();
  } catch (error) {
    return console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function readJson(jsonPath) {
  let outcome = undefined;
  try {
    const data = await fs.readFile(jsonPath).then(async data => {
      outcome = await JSON.parse(data);
    });
    return outcome;
  } catch (error) {
    return console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

module.exports = { readFile, readJson };
