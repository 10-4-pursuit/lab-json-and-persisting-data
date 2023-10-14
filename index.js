const { faker } = require("@faker-js/faker");
const fs = require("fs");

// const budgetPC = [
//     {
//         name: "",
//         type: "",
//         specs: [""]
//     }
// ]

const budgetPC = [];

function randomSpecs() {
    const specs = [
        "AMD Ryzen 5 7600",
        "AMD Radeon RX 7600",
        "Deepcool CK560",
        "FSP Hydro G Pro 750w",
        "Corsair Vengeance 32GB DDR5",
        "Gigabyte B650 Aorus Elite AX",
        "Crucial P3 1TB",
        "AMD Wraith Stealth"
    ];
    return specs[Math.floor(Math.random() * specs.length)];
}

for(let i = 0; i < 5; i++) {
    budgetPC.push({
        name: faker.company.name(),
        type: faker.hacker.adjective(),
        specs: [randomSpecs(), randomSpecs(), randomSpecs(), randomSpecs()]
    })
}

//create method
function addPC() {
    budgetPC.push({
        name: faker.company.name(),
        type: faker.hacker.adjective(),
        specs: [randomSpecs(), randomSpecs(), randomSpecs(), randomSpecs()]
    })
    return budgetPC[budgetPC.length - 1];
}
// console.log(addPC())

//read method
function getAllPC() {
    return budgetPC;
}
// console.log(getAllPC())

//read a single pc type
function getPCByType(type) {
    return budgetPC.find(pc => pc.type === type) || null;
}
// console.log(getPCByType("primary"))

function updatePC(index, newPCData) {
    budgetPC[index] = {
        ...budgetPC[index], newPCData
    }
    return budgetPC[index];
}
// console.log(updatePC(4, { specs: [randomSpecs(), randomSpecs(), randomSpecs()] }))

function removePC(index) {
   return budgetPC.splice(index, 1);
}
// console.log(removePC(2));


fs.writeFileSync("./budgetPC.json", JSON.stringify(budgetPC));

module.exports = { removePC, updatePC, getPCByType, getAllPC, addPC, budgetPC };