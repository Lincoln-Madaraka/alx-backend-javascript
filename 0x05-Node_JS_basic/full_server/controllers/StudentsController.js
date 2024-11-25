import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const orderedKey = Object.keys(fields).sort();
        res.status(200);
        res.write('This is the list of our students\n');
        for (let i = 0; i < orderedKey.length; i += 1) {
          res.write(`Number of students in ${orderedKey[i]}: ${fields[orderedKey[i]].length}. List: ${fields[orderedKey[i]].join(', ')}`);
          if (i !== orderedKey.length - 1) {
            res.write('\n');
          }
        }
      })
      .catch((err) => {
        res.write(err.message);
        res.status(500);
      })
      .finally(() => res.end());
  }

  static getAllStudentsByMajor(req, res) {
    res.status(200);
    const field = req.params.major;
    if (field !== 'CS' && field !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        res.send(`List: ${fields[field].join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}
