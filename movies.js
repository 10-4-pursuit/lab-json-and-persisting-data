const { faker } = require("@faker-js/faker");

function createRandomMovies() {
  // generates fake movie data with just the movie title, director, and release year.
  const movies = {
    _id: faker.datatype.uuid(),
    movie_title: faker.music.songName(),
    director: faker.name.fullName(),
    release_year: faker.date.between({
      from: '01-01-1945',
      to: '01-01-2024',
    } ),
    

  };
  return movies;
}

//generates fake movie data, the amount based on which argument is passed in the number's parameter. This is for the user. 
function randomMovieFactory(number) {
  const movies = [];

  if (!number){
    return `please enter the number of movies you would like to generate!`
  }

  if (isNaN(number)){
    return `please enter a number if you want to generate random movie titles`
  }

  for (let i = 0; i < number; i++) {
    movies.push(createRandomMovies());
  }
  return movies;
}


module.exports = { createRandomMovies, randomMovieFactory };
