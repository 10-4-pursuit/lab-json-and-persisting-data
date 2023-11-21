const { faker } = require("@faker-js/faker");
const fs = require("fs");
const dataFolder = "data";
const dataFilePath = `${dataFolder}/music_data.json`;

function generateFakeMusicData() {
  const fakeMusic = [];

  for (let i = 1; i <= 15; i++) {
    fakeMusic.push({
        genre:faker.music.genre(),
         song:faker.music.songName(),
    });
  }

  return fakeMusic;
}



// const fakeMusicData = generateFakeMusicData();


// fs.writeFileSync(dataFilePath, JSON.stringify(fakeMusicData, null, 2));
// console.log(`Music data saved to "${dataFilePath}".`);

module.exports = {
  generateFakeMusicData
}