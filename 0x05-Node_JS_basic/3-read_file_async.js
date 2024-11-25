const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n')
          .map((student) => student.split(','))
          .filter((student) => student.length === 4 && student[0] !== 'firstname')
          .map((student) => ({
            firstName: student[0],
            lastName: student[1],
            age: student[2],
            field: student[3],
          }));
        const csStudents = students
          .filter((student) => student.field === 'CS')
          .map((student) => student.firstName);
        const sweStudents = students
          .filter((student) => student.field === 'SWE')
          .map((student) => student.firstName);
        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        resolve(null);
      }
    });
  });
}

module.exports = countStudents;