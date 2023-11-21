const {readFileJSON, writeFileJSON} = require("./src/fileHandler.js")
const  {generateFakeMusicData} = require("./src/music.js")
const command = process.argv[2]
if(command === "write") {
  const fakeMusic = generateFakeMusicData()
  writeFileJSON("./data/music_data.json", fakeMusic )
}

if(command === "read") {
console.log(readFileJSON("./data/music_data.json"))
}


