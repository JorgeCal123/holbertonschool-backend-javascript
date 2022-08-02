export default function getStudentIdsSum(list) {
  let suma = 0;
  if (Array.isArray(list)) {
    list.map((student) => {
      suma += student.id;
      return suma;
    });
  } else {
    suma = [];
  }
  return suma;
}
