export default function getStudentIdsSum(list) {
  let suma = 0;
  list.map((student)=> {
    suma = suma + student.id;
  });
  return suma;
}
