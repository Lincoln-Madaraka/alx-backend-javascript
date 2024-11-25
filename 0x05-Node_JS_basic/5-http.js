const http = require('http');
const url = require('url');
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

const app = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (path === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (path === '/students') {
    res.write('This is the list of our students\n');
    const database = process.argv[2];
    countStudents(database).then((data) => {
      res.write(data);
    }).catch((err) => {
      res.write(err.message);
    }).finally(() => res.end());
  }
}).listen(1245);

module.exports = app;
