const { faker } = require("@faker-js/faker");
const fs = require("fs");

const stores = require("../data/stores.json");

// Creating a Store
function addStore(data) {
    stores.push(data);
    return stores;
};

// Reading all Stores
function getAllStores() {
    return stores;
};

// Reading a single Halloween Store
function getSingleStore(index) {
    return stores[index];
};

// Updating a Halloween Store
function updateStore(index, data) {
    stores[index] = {
      ...stores[index],
      ...data
    }
    return stores[index];
};

// Delete a Halloween Store
function deleteStore(index) {
    stores.splice(index, 1);
};

function saveCurrentStores() {
    const stringifiedData = JSON.stringify(stores, null, 2);
    fs.writeFileSync("./data/stores.json", stringifiedData)
}

for(let i = 0; i < 5; i ++) {
    addStore({
    storeId: faker.random.alphaNumeric(5),
    name: faker.company.name(),
    address: faker.address.streetAddress(),
    rating: Number((Math.random() * 5).toFixed(2))
  });
}


saveCurrentStores();

module.exports = {
    addStore, 
    getAllStores,
    getSingleStore,
    updateStore,
    deleteStore
  }
