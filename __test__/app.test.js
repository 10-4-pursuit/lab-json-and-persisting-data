const fs = require('fs');
const faker = require('faker');

describe('Patient Records App', () => {
  test('generatePatientRecord generates a patient record with valid fields', () => {
    const patientRecord = generatePatientRecord();

    expect(patientRecord).toHaveProperty('patientID');
    expect(patientRecord).toHaveProperty('patientName');
    expect(patientRecord).toHaveProperty('doctorName');
  });

  test('patientRecords array contains the specified number of patient records', () => {
    const count = 5; // You can specify the number of patient records to generate for testing
    const patientRecords = [];

    for (let i = 0; i < count; i++) {
      patientRecords.push(generatePatientRecord());
    }

    expect(patientRecords).toHaveLength(count);
  });

  test('patient records are saved to data.json file', () => {
    const count = 3; // Specify the number of patient records to generate
    generatePatientRecordsAndSaveToFile(count);

    const data = fs.readFileSync('data.json', 'utf-8');
    const parsedData = JSON.parse(data);

    expect(parsedData).toBeInstanceOf(Array);
    expect(parsedData).toHaveLength(count);
  });
});
