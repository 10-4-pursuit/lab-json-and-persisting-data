const { storeAnimalSpecies } = require('../src/animals');

describe('storeAnimalSpecies', () => {
  it('should return an array of animal species', () => {
   
    const animals = [
      { name: "Marielle", species: "fish" },
      { name: "Katherine", species: "horse" },
      { name: "Isaias", species: "lion" },
    ];

    
    const expectedSpecies = ['fish', 'horse', 'lion'];

    
    const result = storeAnimalSpecies(animals);
    expect(result).toEqual(expectedSpecies);
  });

  it('should handle an empty array', () => {
    
    const animals = [];
    const result = storeAnimalSpecies(animals);
    expect(result).toEqual([]);
  });

  it('should return an empty array when provided an empty array of animals', () => {
   
    const animals = [];
  
    
    const expectedSpecies = [];
  
   
    const result = storeAnimalSpecies(animals);
    expect(result).toEqual(expectedSpecies);
  });
  
});