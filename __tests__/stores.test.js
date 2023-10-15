const { 
    addStore, 
    getAllStores,
    getSingleStore,
    updateStore,
    deleteStore
  } = require("../src/index.js");
  
  const { faker } = require("@faker-js/faker");
  const fs = require("fs");

  const storeData = require("../data/stores.json");



  describe("Can get Store:", () => {
    it("can return a single Store object.", () => {
        const actual =  getSingleStore(1);
        const expected = storeData[1];
        expect(actual).toStrictEqual(expected);
    })
    it("can return all Stores in the array.", () => {
        const actual = getAllStores();
        const expected = storeData;
        expect(actual).toStrictEqual(expected);
    })
})

    