//export default function updateStudentGradeByCity(list, city, newgrades) {
//  const liststudents = list.filter((student) => student.location === city);
//  const studentGrade = [];
//  let grade;
//  liststudents.map((studentCity) => {
//    const grades = (newgrades.filter((obj) => obj.studentId === studentCity.id));
//    if (grades.length === 0) {
//      grade = 'N/A';
//    } else {
//      grade = grades[0].grade;
//    }
//    studentGrade.push({ ...studentCity, grade });
//  });
//  return studentGrade;
//}

export default function updateStudentGradeByCity(list, city, newgrades) {
  const liststudents = list.filter((student) => student.location === city);
  const studentGrade = [];
  let grade;
  liststudents.map((studentCity) => {
    const grades = (newgrades.filter((obj) => obj.studentId === studentCity.id));
    if (grades.length === 0) {
      grade = 'N/A';
    } else {
      grade = grades[0].grade;
    }
    studentGrade.push({ ...studentCity, grade });
  });
  return studentGrade;
}