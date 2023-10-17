const fs = require('fs');
const faker = require('faker');

// empty array to store patient records
let patientRecords = [];

// generate a random patient record
function generatePatientRecord() {
  const patientID = faker.random.uuid(); // Generate a unique patient ID
  const patientName = faker.name.findName(); // Generate a random patient name
  const doctorName = faker.name.findName(); // Generate a random doctor name

  return {
    patientID,
    patientName,
    doctorName,
  };
}

//create patient records
const readline = require('readline');
const userReadline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userReadline.question('How many patient records do you want to generate? ', (count) => {
 
  for (let i = 0; i < count; i++) {
    patientRecords.push(generatePatientRecord());
  }

  // save the records to the data.json file
  fs.writeFileSync('data.json', JSON.stringify(patientRecords, null, 2), 'utf-8');

  console.log(`Generated ${count} patient records and saved to data.json.`);
  userReadline.close();
});


module.exports = { generatePatientRecord }