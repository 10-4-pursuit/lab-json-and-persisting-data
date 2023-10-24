const { faker } = require("@faker-js/faker");
const fs = require("fs");

const coolImage = () => {
    const coolImages = [];
    for (let i = 0; i <= 10; i++) {
        const imageId = faker.datatype.uuid();
        const imageName = faker.lorem.words(2);
        const imageUrl = faker.image.image();
        const tags = Array.from({ length: 3 }, () => faker.random.word());
        const uploadDate = faker.date.past();
    
      coolImages.push({
        id: i,
        imageId: imageId,
        imageName: imageName,
        imageUrl: imageUrl,
        tags: tags,
        uploadDate: uploadDate.toISOString()
    
        });
    }
    
    fs.writeFileSync("./data/coolImage.json", JSON.stringify(coolImages, null, 2)) 
}
coolImage()
module.exports = coolImage;




// const dataFolder = "data";
// const dataFilePath = `${dataFolder}/image_data.json`;
// function generateImageData() {
//   const coolImages = [];


// const fakeMusicData = generateFakeMusicData();


// fs.writeFileSync(dataFilePath, JSON.stringify(fakeMusicData, null, 2));
// console.log(`Music data saved to "${dataFilePath}".`);
