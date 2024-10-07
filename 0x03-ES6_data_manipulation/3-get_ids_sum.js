export default function getStudentIdsSum(arr) {
  const result = arr.reduce((accum, current) => accum + current.id, 0);
  return result;
}
