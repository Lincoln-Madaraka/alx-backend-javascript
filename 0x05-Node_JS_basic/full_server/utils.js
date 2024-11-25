import * as fs from 'fs';

export default function readDatabase(path) {
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
        const fields = {};
        students.forEach((student) => {
          if (!fields[student.field]) {
            fields[student.field] = [student.firstName];
          } else {
            fields[student.field].push(student.firstName);
          }
        });
        resolve(fields);
      }
    });
  });
}
