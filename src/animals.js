

function storeAnimalSpecies(animals) {
  const animalSpecies = [];

  for (let animal of animals) {
    animalSpecies.push(animal.species);
  }

  return animalSpecies;
}



module.exports = {
  storeAnimalSpecies
};