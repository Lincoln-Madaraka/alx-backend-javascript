export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = val;
    }
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = val;
    }
  }

  set students(val) {
    if (typeof val !== 'object') {
      throw new TypeError('Students must be a list of strings');
    } else {
      this._students = val;
    }
  }
}
