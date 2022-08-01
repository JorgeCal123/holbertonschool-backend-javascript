export default function getListStudentIds(list) {
  const ids = []
  if (!Array.isArray(list)) {
    return [];
  }
  list.map((student)=>{
    ids.push(student.id)
  })
  return ids;
}