const { faker } = require("@faker-js/faker");
const fs = require("fs");
const dataFolder = "data";
const dataFilePath = `${dataFolder}`;

function generateFakeMusicData() {
    const song = [];

for (let i = 1; i <= 10 ; i++){ 
    song.push({
        songName: faker.music.songName()
    })
 };
return song;
}

const fakeMusicData = generateFakeMusicData()



fs.writeFileSync(dataFilePath, JSON.stringify(fakeMusicData, null, 2));
console.log(`Music data saved to "${dataFilePath}".`);