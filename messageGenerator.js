const faker = require('faker');


function createRandomMessage() {
    const id = Date.now();
    const hackerName = `${faker.hacker.adjective()} ${faker.hacker.abbreviation()} ${faker.hacker.abbreviation()}`;
    const messageTitle = `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`;
    const isResolved = faker.datatype.boolean();

    const message = {
    id,
    hackerName,
    messageTitle,
    isResolved
  };

  return message;
}



// console.log(createRandomMessage());

function randomMessageFactory(number) {
    const messages = []

    for (let i =0; i < number; i++)  {
        messages.push(createRandomMessage())
    }
    return messages
}

module.exports = {
    createRandomMessage,
    randomMessageFactory,
}
