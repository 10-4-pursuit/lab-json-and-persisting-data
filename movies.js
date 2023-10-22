const { faker } = require("@faker-js/faker");

function createRandomMovies() {
    const movies = {
      _id: faker.datatype.uuid(),
      movie_title: faker.music.songName(),
      director: faker.name.fullName(),
      release_year: faker.date.birthdate({
        min: 1945,
        max: 2024,
        mode: 'year'

      }
        )
     
    //   description: faker.commerce.productDescription(),
    //   brand: faker.company.name(),
    //   price: faker.commerce.price(10, 200, 2, "$"),
    //   currency: "USD",
    //   inStock: faker.datatype.boolean(),
    //   attributes: {
    //     material: faker.commerce.productMaterial(),
    //     color: faker.vehicle.color(),
    //   },
    };
    return movies;
  }

  function randomMovieFactory(number) {
    const movies = [];
    for (let i = 0; i < number; i++) {
      movies.push(createRandomMovies());
    }
    return movies;
  }
  
  


  module.exports = { createRandomMovies, randomMovieFactory };
 