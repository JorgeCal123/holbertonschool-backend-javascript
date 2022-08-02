export default function getlistsumaSum(list) {
  const suma = list.reduce((count, students) => count + students.id, 0);
  return suma;
}
