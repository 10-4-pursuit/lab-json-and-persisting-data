const { faker } = require("@faker-js/faker");
const fs = require("fs");
const dataFolder = "data";
const dataFilePath = `${dataFolder}/animal_data.json`;

function generateFakeAnimalData() {
  const animals = [];

  for (let i = 1; i <= 15; i++) {
    animals.push({
      name: faker.name.firstName(),
      species: faker.animal.type(),
      origin: faker.address.country(),
    });
  }

  return animals;
}

function storeAnimalSpecies(animals) {
  const animalSpecies = [];

  for (let animal of animals) {
    animalSpecies.push(animal.species);
  }

  return animalSpecies;
}


const fakeAnimalData = generateFakeAnimalData();


fs.writeFileSync(dataFilePath, JSON.stringify(fakeAnimalData, null, 2));
console.log(`Animal data saved to "${dataFilePath}".`);

module.exports = {
  storeAnimalSpecies,
};