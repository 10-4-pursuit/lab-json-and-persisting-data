const faker = require('faker');


function createRandomMessage() {
  const id = Date.now();

  const hackerName = `${faker.hacker.adjective()} ${faker.hacker.abbreviation()} ${faker.hacker.abbreviation()}`;

  const messageTitle = `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`;
  
  const isResolved = faker.random.boolean();

  const message = {
    id,
    hackerName,
    messageTitle,
    isResolved
  };

  return message;
}

console.log(createRandomMessage());
