const { faker } = require("@faker-js/faker");
let { updateSteps, StoneFit, createUser, readUsers, updateUser,
    deleteUser, getUserById } = require("../index.js");
// console.log(StoneFit)

test('Test updateSteps function', () => {
  const updatedStepsMessage = updateSteps("xha84e6tpok");
  expect(typeof updatedStepsMessage).toBe('string');
});

test('Test successful update user function', () => {
    let user = getUserById("xha84e6tpok");
    updatedUser = {
        ...user,
        firstName: "Carmel"
    }
   const result =  updateUser(user.id, updatedUser);
   expect(result).toBe("User information updated!");
  });

  test('Test deleteUser function', () => {
   const result =  deleteUser("yha84e6tpok");
   expect(result).toBe("User ID not found.");
  });


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'StoneFitData.json');

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath);
  StoneFit = JSON.parse(data);
} else {
  StoneFit = {
    users: [],
  };

  fs.writeFileSync(filePath, JSON.stringify(StoneFit, null, 2));
}