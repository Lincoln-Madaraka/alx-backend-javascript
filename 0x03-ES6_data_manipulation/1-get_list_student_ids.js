export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) return [];

  const keys = arr.map((item) => item.id);
  return keys;
}
