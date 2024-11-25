const express = require('express');
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
        let buffer = `Number of students: ${students.length}\n`;
        buffer += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
        buffer += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
        resolve(buffer);
      }
    });
  });
}

const app = express();
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const database = process.argv[2];
  res.write('This is the list of our students\n');
  countStudents(database).then((data) => {
    res.write(data);
  }).catch((err) => {
    res.write(err.message);
  }).finally(() => res.end());
});

app.listen(1245);

module.exports = app;
