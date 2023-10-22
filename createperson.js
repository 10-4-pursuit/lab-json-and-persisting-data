const { faker } = require("@faker-js/faker")

function GenerateRandomPerson() {
    const person = {
    id: faker.database.mongodbObjectId(),
    personName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    tellMeAboutYourself: faker.lorem.paragraph(),
    isSingle: faker.datatype.boolean(),
    phone: faker.phone.number(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    favSong: faker.music.songName(),
    }
    return person
}



function multipleRandomPersons(num) {
    const people = []
    for (let i=0; i< num; i++) {
        people.push(GenerateRandomPerson())
    }
    return people
}


module.exports = { GenerateRandomPerson, multipleRandomPersons }
    
