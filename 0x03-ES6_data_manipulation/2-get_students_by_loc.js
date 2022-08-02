export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list)) {
  const result = list.filter((student) => student.location === city);
  return result;
  }
  return [];
}
