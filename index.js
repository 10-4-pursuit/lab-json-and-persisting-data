/**
 
Remember CRUD


 */
const { writeJSONFile, readJSONFile } = require("./creator");
const { createRandomMovies, randomMovieFactory } = require("./movies");


function run() {
  let movies = readJSONFile("./data", "movies.json");
  console.log(movies);
  if (process.argv[3]) {
    movies.push(...randomMovieFactory(process.argv[3]));
  } else {
    movies.push(createRandomMovies());
  }
  writeJSONFile("./data", "movies.json", movies);
}

run();