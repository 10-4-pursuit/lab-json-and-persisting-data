const { faker, Faker } = require("@faker-js/faker");
const fs = require("fs");
const filePath = "./StoneFit.json";
const StoneFit = require(filePath);

function createUser(newUser) {
    newUser.id = Faker.random.id(); 
    StoneFit.users.push(newUser);
    saveData();
    return "New user created!";
}

function readUsers() {
    return StoneFit.users;
}

function getUserById(id) {
    for (let user of StoneFit.users) {
        if (user.id === id) {
            return user;
        }
    }
    return null;
}

function updateUser(userId, updatedData) {
    if (userExists(userId)) {
        const allUsers = [...StoneFit.users]
        for (let index = 0; index < allUsers.length; index++) {
            if (allUsers[index].id === userId) {
                allUsers[index] = updatedData;
                break;
            }
        }
        StoneFit.users = [...allUsers];
        saveData();
        return "User information updated!";
    }
    return "User ID not found.";
}

function deleteUser(userId) {
    if (userExists(userId)) {
        StoneFit.users.splice(userId, 1);
        saveData();
        return "User deleted!";
    }
    return "User ID not found.";
}

function getAllUserId() {
    const userId = [];
    for (const user of StoneFit.users) {
        userId.push(user.id);
    }
    return userId;
}

function userExists(userId) {
    const userIds = getAllUserId();
    const userExists = !!userIds.find(id => id === userId)
    return userExists;
}

function updateSteps(id) {
    let foundUser = 0;
    for (const user of StoneFit.users) {
        if (user.id === id) {
            foundUser = user
        }
    }
    if (foundUser) {
        
        const newSteps = faker.random.numeric({ min: 0, max: 5000 });
        const exerciseType = faker.lorem.word();
        const durations = ['15 minutes', '30 minutes', '45 minutes', '1 hour'];
        const duration = durations[Math.floor(Math.random() * durations.length)];
        foundUser.stepsToday = newSteps;
        
        return `You took ${newSteps} steps after a ${duration} ${exerciseType} session.`;
    }
};

function saveData() {
    fs.writeFileSync(filePath, JSON.stringify(StoneFit, null, 2));
}

module.exports = {
    
    updateSteps,
    StoneFit,
    createUser,
    readUsers,
    updateUser,
    deleteUser,
    getUserById
    
};