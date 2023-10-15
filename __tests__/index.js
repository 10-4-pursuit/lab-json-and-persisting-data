const { faker } = require("@faker-js/faker");
const fs = require("fs");
const favoriteElement = require("../data/index.json");

const { 
  addElement,
  elementList,
  singleElement,
  updateElement,
  deleteElement,
  saveElementlist
 } = require("../src/index");

 describe("Create: addElement()", () => {
  test("Adds an element to the list", () => {
    const actual = addElement(favoriteElement);
    const expected = favoriteElement;

    expect(actual).toBe(expected);
  });
 });

 describe("Read: elementList()", () => {
  test("Shows the list", () => {
    const actual = elementList();
    const expected = favoriteElement;

    expect(actual).toBe(expected);
  });
 test("Shows one element in the list", () => {
    const actual = singleElement(0);
    const expected = favoriteElement[0];

    expect(actual).toBe(expected);
  });
});


















// const {
//   addElement,
//   elementList,
//   singleElement,
//   updateElement,
//   deleteElement,
//   saveElementlist,
// } = require("../src/index");
// describe("Testing the toy list functions", () => {
//   beforeEach(() => {
//     // Restore the original data before each test by re-reading it from the file.
//     fs.writeFileSync("./data/index.json", JSON.stringify(originalData, null, 2));
//   });

//   it("should add a new toy to the list", () => {
//     const initialLength = elementList().length;
//     addElement({ element: "New Toy" });
//     expect(elementList().length).toBe(initialLength + 1);
//   });

//   it("should return the list of toys", () => {
//     const list = elementList();
//     expect(list).toEqual(expect.arrayContaining(originalData));
//   });

//   it("should return a single toy by index", () => {
//     const index = 0; // Change to a valid index
//     const element = singleElement(index);
//     expect(element).toEqual(originalData[index]);
//   });

//   it("should update a toy by index", () => {
//     const index = 0; // Change to a valid index
//     const updatedData = { element: "Updated Toy" };
//     const updatedElement = updateElement(index, updatedData);
//     expect(updatedElement).toEqual({ ...originalData[index], ...updatedData });
//   });

//   it("should delete a toy by index", () => {
//     const initialLength = elementList().length;
//     const index = 0; // Change to a valid index
//     deleteElement(index);
//     expect(elementList().length).toBe(initialLength - 1);
//   });

//   it("should save the toy list to a file", () => {
//     saveElementlist();

//     // Read the saved data from the file and compare with the original data.
//     const savedData = JSON.parse(fs.readFileSync("./data/index.json", "utf8"));
//     expect(savedData).toEqual(originalData);
//   });
// });