const fs = require("fs");

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data, null, 2); 
  fs.writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

function readJSONFile(path, fileName) {
  try {
    const collection = fs.readFileSync(`${path}/${fileName}`, "utf8");
    return collection ? JSON.parse(collection) : [];
  } catch (error) {
    return [];
  }
}

module.exports = {
  writeJSONFile,
  readJSONFile,
};
