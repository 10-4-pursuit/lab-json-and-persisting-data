const { GenerateRandomPerson, multipleRandomPersons } = require("../createperson")
describe('GenerateRandomPerson', () => {
    it('should make sure the correct datatype is being inserted into each field.', () => {
      const person = GenerateRandomPerson();
  
      expect(typeof person.id).toBe('string');
      expect(typeof person.personName).toBe('string');
      expect(typeof person.tellMeAboutYourself).toBe('string');
      expect(typeof person.isSingle).toBe('boolean');
      expect(typeof person.phone).toBe('string');
      expect(typeof person.streetAddress).toBe('string');
      expect(typeof person.city).toBe('string');
      expect(typeof person.state).toBe('string');
      expect(typeof person.favSong).toBe('string');
    });
  });


  describe('multipleRandomPersons', () => {
    it('should confirm that the function to create many items creates the correct number of items.', () => {
      expect(multipleRandomPersons(3)).toHaveLength(3);
    });
  });