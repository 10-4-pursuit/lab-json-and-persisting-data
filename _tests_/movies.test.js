const { createRandomMovies, randomMovieFactory } = require("../movies.js");


describe("createRandomMovies()", () => {
    // Test that the function generates fake movie data with the correct fields.
    it('should generate fake movie data with the correct fields', () => {
        // Generate fake movie data.
        const movies = createRandomMovies();

        // Assert that the generated data has the correct fields.
        expect(movies).toHaveProperty('_id');
        expect(movies).toHaveProperty('movie_title');
        expect(movies).toHaveProperty('director');
        expect(movies).toHaveProperty('release_year');
    });





describe("randomMovieFactory()", () => {
    // Test that the function generates an error message if no argument is added.
    test("generates an error message if no argument added", () => {

        // Assert that the generated data matches the message.
        expect(randomMovieFactory()).toMatch('please enter the number of movies you would like to generate!')
    });

    // Test that the function generates an error message if any other data type besides integers.
    test("generates an error message if any other data type besides integers", () => {

        //Assert that the generated data matches the message.
        expect(randomMovieFactory(("string"))).toMatch(`please enter a number if you want to generate random movie titles`)
    });

});



