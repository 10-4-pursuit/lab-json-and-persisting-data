const { GenerateRandomPerson, multipleRandomPersons } = require("./createperson")
const { writeJSONFile, readJSONFile } = require("./helpers");
function run() {
    let file = readJSONFile("./data", "file.json")
    if (process.argv[3]) {
        const numOfPeopleToAdd = process.argv[3]

      file.push(...multipleRandomPersons(numOfPeopleToAdd));
    } else {
      file.push(GenerateRandomPerson());
    }
    writeJSONFile("./data", "file.json", file)
  }
  run();

  module.exports = { run }