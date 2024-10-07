export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => {
    if (student.location === city) {
      return true;
    }
    return false;
  });
  const newStudentsGrades = studentsByCity.map((student) => {
    const cpStudent = student;
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (newGrade) {
      cpStudent.grade = newGrade.grade;
    } else {
      cpStudent.grade = 'N/A';
    }
    return cpStudent;
  });
  return newStudentsGrades;
}
