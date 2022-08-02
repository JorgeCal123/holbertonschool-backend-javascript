export default function getListStudentIds(list) {
  const ids = [];
  if (!Array.isArray(list)) {
    return [];
  }

  ids.push(...list.map((student) => (
    student.id
  )));
  return ids;
}
