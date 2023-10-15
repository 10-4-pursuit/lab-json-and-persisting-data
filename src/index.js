const { faker } = require("@faker-js/faker");
const fs = require("fs");
const favoriteElement = require("../data/index.json")


// Create: add new toy to list
function addElement(data) {
    let newElement = data;
    favoriteElement.push(newElement);
    return favoriteElement;
}

// Read: look at all toys
function elementList() {
    return favoriteElement;
}

// Read: look at one toy
function singleElement(index) {
    return favoriteElement[index];
}

// Update: change a toy
function updateElement(index, data) {
    favoriteElement[index] = {
        ...favoriteElement[index],
        ...data
    }
    return favoriteElement[index];
}

// Delete: remove a toy
function deleteElement(index) {
    favoriteElement.splice(index, 1);
}

function saveElementlist() {
    const stringifiedData = JSON.stringify(favoriteElement, null, 2);
    fs.writeFileSync("./data/index.json", stringifiedData)
}

for (let i = 0; i < 10; i++) {
    addElement({ 
        element: faker.science.chemicalElement()
    })
}

saveElementlist();


module.exports = {
    addElement,
    elementList,
    singleElement,
    updateElement,
    deleteElement,
    saveElementlist
}


