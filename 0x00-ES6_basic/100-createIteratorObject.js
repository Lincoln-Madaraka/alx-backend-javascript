export default function createIteratorObject(report) {
  const iterator = [];
  for (const department of Object.keys(report.allEmployees)) {
    iterator.push(...(report.allEmployees[department]));
  }
  return iterator;
}
