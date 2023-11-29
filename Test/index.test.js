const { getListOfStudents,  allActiveStudents, generatePairs } = require('../index');

test('example test', () => {
  const students = getListOfStudents();
  console.log('List Of All Students Active and Not Active:');
  for (let i = 0; i < students.length; i++) {

	const isActiveText = students[i].isActive ? 'yes' : 'no';

console.log(`First Name: ${students[i].firstName}, Last Name: ${students[i].lastName}, Current Student: ${isActiveText}`);

  }
});

test('allActiveStudents test', () => {
  const activeStudents = allActiveStudents();
  console.log('List of Active Students:');
  activeStudents.forEach(student => {
    console.log(`First Name: ${student.firstName}, Last Name: ${student.lastName}, Current Student: yes`);
  })
});
const activeStudents = allActiveStudents();
const pairs = generatePairs(activeStudents);

console.log('Random Pairs:');
pairs.forEach(pair => {
  console.log(`${pair.student1.firstName} ${pair.student1.lastName} and ${pair.student2.firstName} ${pair.student2.lastName}`);
});

