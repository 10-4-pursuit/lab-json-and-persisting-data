const { getListOfStudents,  allActiveStudents } = require('../index');

test('example test', () => {
  const students = getListOfStudents();
  
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

