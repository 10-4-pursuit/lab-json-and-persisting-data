const faker = require('faker');
const getListOfStudents= () => {
  const students = [];

  for (let i = 0; i < 20; i++) {
    const student = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      isActive: faker.datatype.boolean(),
    };
    students.push(student);
  }
  return students;
};

const allActiveStudents = () => {
	const allStudents = getListOfStudents();
	const activeStudents = allStudents.filter(student => student.isActive);
	return activeStudents;
  };

  const generatePairs = (allActiveStudents) => {
    const shuffledStudents = [...allActiveStudents].sort(() => Math.random() -0.5);
    
    const pairs = [];
    for (let i = 0; i < shuffledStudents.length; i += 2) {
      const pair = {
        student1: shuffledStudents[i],
        student2: shuffledStudents[i + 1],
      };
      pairs.push(pair);
    }
    return pairs;
  };
  
  
module.exports =
 { getListOfStudents,
 allActiveStudents,
generatePairs,
};