const fs = require("fs")

function readFileJSON(filePath) {
fs.readFileSync()
}


function writeFileJSON(filePath, data) {
try{
   return fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}
catch(err) {
    console.log("cant write to file")
}
}


function readFileJSON(filePath) {
    try{
       const readFile = fs.readFileSync(filePath)
       return JSON.parse(readFile)
    }
    catch(err) {
        console.log(err)
        console.log("cant read file")
 }
}








module.exports = {
    readFileJSON,
    writeFileJSON
}