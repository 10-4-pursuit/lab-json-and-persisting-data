const data = require("../budgetPC.json");

const { budgetPC, addPC, removePC, updatePC, getPCByType, getAllPC } = require("../index.js");

describe("testing addPC()", () => {
it("creates a new pc object and adds it to the array", () => {
    expect(addPC()).toEqual(budgetPC[budgetPC.length - 1]);
})
})

describe("testing getPCByType()", () => {
it("returns null if we search for pcType that doesnt exist", () => {
    expect(getPCByType("micro")).toBe(null);
})
})

