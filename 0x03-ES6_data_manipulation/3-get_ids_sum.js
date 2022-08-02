export default function getlistsumaSum(list) {
  if (Array.isArray(list)) {
    const suma = list.reduce((count, students) => count + students.id, 0);
    return suma;
  }
  return [];
}
